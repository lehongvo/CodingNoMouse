'use client';

import { useCallback, useEffect, useState } from 'react';

export interface DayProgress {
  week: number;
  day: string;
  completed: boolean;
  completedTasks: Set<string>;
  notes?: string;
}

export interface WeekProgress {
  week: number;
  completedDays: number;
  totalDays: number;
  progress: number; // 0-100
}

const STORAGE_KEY = 'learnskill-progress';
const API_BASE = '/api/progress';
const ADMIN_USER_ID = 'admin'; // Single admin user

// Helper to check authentication
async function checkAuth(): Promise<boolean> {
  try {
    const response = await fetch('/api/auth/check');
    const data = await response.json();
    return data.authenticated === true;
  } catch (error) {
    return false;
  }
}

// Helper to get user ID - always admin for single user system
function getUserId(): string {
  return ADMIN_USER_ID;
}

export function useProgress() {
  const [progress, setProgress] = useState<Map<string, DayProgress>>(new Map());
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [syncError, setSyncError] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const map = new Map<string, DayProgress>();
        Object.entries(parsed).forEach(([key, value]) => {
          map.set(key, {
            ...(value as DayProgress),
            completedTasks: new Set((value as DayProgress).completedTasks || [])
          });
        });
        setProgress(map);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  }, []);

  // Sync with server
  const syncWithServer = useCallback(async (force = false) => {
    if (isSyncing && !force) return;
    
    // Check authentication first
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      setSyncError('Not authenticated');
      setIsSyncing(false);
      // Redirect to login if not authenticated
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
      return;
    }
    
    setIsSyncing(true);
    setSyncError(null);
    
    try {
      const userId = getUserId();
      
      // Get server progress
      const response = await fetch(`${API_BASE}?userId=${userId}`);
      if (response.status === 401) {
        // Unauthorized - redirect to login
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return;
      }
      if (!response.ok) throw new Error('Failed to fetch progress');
      
      const data = await response.json();
      
      // Merge server and local progress (server takes precedence)
      if (data.progress?.progress) {
        const serverProgress = new Map<string, DayProgress>();
        Object.entries(data.progress.progress).forEach(([key, value]) => {
          const dayProgress = value as any;
          serverProgress.set(key, {
            week: dayProgress.week,
            day: dayProgress.day,
            completed: dayProgress.completed,
            completedTasks: new Set(dayProgress.completedTasks || []),
            notes: dayProgress.notes
          });
        });
        
        // Merge with local (local changes override if newer)
        setProgress((prev) => {
          const merged = new Map(serverProgress);
          prev.forEach((value, key) => {
            if (!merged.has(key)) {
              merged.set(key, value);
            }
          });
          return merged;
        });
      }
      
      // Save local progress to server
      const localProgress: Record<string, any> = {};
      progress.forEach((value, key) => {
        localProgress[key] = {
          week: value.week,
          day: value.day,
          completed: value.completed,
          completedTasks: Array.from(value.completedTasks),
          notes: value.notes
        };
      });
      
      if (Object.keys(localProgress).length > 0) {
        const saveResponse = await fetch(API_BASE, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ progress: localProgress, userId })
        });
        
        if (saveResponse.status === 401) {
          // Unauthorized - redirect to login
          if (typeof window !== 'undefined') {
            window.location.href = '/login';
          }
          return;
        }
        if (!saveResponse.ok) throw new Error('Failed to save progress');
      }
      
      setLastSync(new Date());
    } catch (error) {
      console.error('Error syncing with server:', error);
      setSyncError(error instanceof Error ? error.message : 'Sync failed');
    } finally {
      setIsSyncing(false);
    }
  }, [progress, isSyncing]);

  // Load from server on mount (only once, no periodic sync)
  useEffect(() => {
    // Initial load from server (one time only)
    syncWithServer(true);
  }, []); // Empty deps - only run once on mount

  // Save to localStorage whenever progress changes (no auto-sync)
  useEffect(() => {
    try {
      const serializable = Object.fromEntries(
        Array.from(progress.entries()).map(([key, value]) => [
          key,
          {
            ...value,
            completedTasks: Array.from(value.completedTasks)
          }
        ])
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
      // NO auto-sync here - only sync on user action
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }, [progress]);

  const getDayKey = (week: number, day: string) => `${week}-${day}`;

  const toggleDayComplete = useCallback(async (week: number, day: string) => {
    let newCompleted: boolean;
    
    // Update local state and capture the new value
    setProgress((prev) => {
      const newProgress = new Map(prev);
      const key = getDayKey(week, day);
      const existing = newProgress.get(key);
      
      if (existing) {
        newCompleted = !existing.completed;
        newProgress.set(key, {
          ...existing,
          completed: newCompleted
        });
      } else {
        newCompleted = true;
        newProgress.set(key, {
          week,
          day,
          completed: true,
          completedTasks: new Set()
        });
      }
      return newProgress;
    });

    // Sync to server immediately (only 1 API call per click)
    try {
      // Check authentication first
      const isAuthenticated = await checkAuth();
      if (!isAuthenticated) {
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return;
      }

      const userId = getUserId();
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dayProgress: {
            week,
            day,
            completed: newCompleted!,
            completedTasks: [],
            notes: undefined
          },
          userId
        })
      });

      if (response.status === 401) {
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return;
      }

      if (!response.ok) throw new Error('Failed to save progress');

      setLastSync(new Date());
      setSyncError(null);
    } catch (error) {
      console.error('Error syncing progress:', error);
      setSyncError(error instanceof Error ? error.message : 'Sync failed');
    }
  }, []);

  const toggleTaskComplete = useCallback(async (week: number, day: string, taskId: string) => {
    let newTasks: Set<string>;
    let isCompleted: boolean;
    
    // Update local state and capture the new values
    setProgress((prev) => {
      const newProgress = new Map(prev);
      const key = getDayKey(week, day);
      const existing = newProgress.get(key) || {
        week,
        day,
        completed: false,
        completedTasks: new Set<string>()
      };

      newTasks = new Set(existing.completedTasks);
      if (newTasks.has(taskId)) {
        newTasks.delete(taskId);
      } else {
        newTasks.add(taskId);
      }

      isCompleted = newTasks.size > 0 && existing.completed;

      newProgress.set(key, {
        ...existing,
        completedTasks: newTasks,
        completed: isCompleted
      });

      return newProgress;
    });

    // Sync to server immediately (only 1 API call per click)
    try {
      // Check authentication first
      const isAuthenticated = await checkAuth();
      if (!isAuthenticated) {
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return;
      }

      const userId = getUserId();
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dayProgress: {
            week,
            day,
            completed: isCompleted!,
            completedTasks: Array.from(newTasks!),
            notes: undefined
          },
          userId
        })
      });

      if (response.status === 401) {
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return;
      }

      if (!response.ok) throw new Error('Failed to save progress');

      setLastSync(new Date());
      setSyncError(null);
    } catch (error) {
      console.error('Error syncing progress:', error);
      setSyncError(error instanceof Error ? error.message : 'Sync failed');
    }
  }, []);

  const getDayProgress = useCallback((week: number, day: string): DayProgress | undefined => {
    return progress.get(getDayKey(week, day));
  }, [progress]);

  const getWeekProgress = useCallback((week: number, totalDays: number): WeekProgress => {
    const weekDays = Array.from(progress.values()).filter(
      (p) => p.week === week && p.completed
    );
    const completedDays = weekDays.length;

    return {
      week,
      completedDays,
      totalDays,
      progress: totalDays > 0 ? (completedDays / totalDays) * 100 : 0
    };
  }, [progress]);

  const resetProgress = useCallback(() => {
    setProgress(new Map());
    localStorage.removeItem(STORAGE_KEY);
    // Also delete from server
    fetch(API_BASE, { method: 'DELETE' }).catch(console.error);
  }, []);

  return {
    progress,
    toggleDayComplete,
    toggleTaskComplete,
    getDayProgress,
    getWeekProgress,
    resetProgress,
    syncWithServer,
    isSyncing,
    lastSync,
    syncError
  };
}
