'use client';

import { useState, useEffect } from 'react';

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

export function useProgress() {
  const [progress, setProgress] = useState<Map<string, DayProgress>>(new Map());

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

  // Save to localStorage whenever progress changes
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
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }, [progress]);

  const getDayKey = (week: number, day: string) => `${week}-${day}`;

  const toggleDayComplete = (week: number, day: string) => {
    setProgress((prev) => {
      const newProgress = new Map(prev);
      const key = getDayKey(week, day);
      const existing = newProgress.get(key);
      
      if (existing) {
        newProgress.set(key, {
          ...existing,
          completed: !existing.completed
        });
      } else {
        newProgress.set(key, {
          week,
          day,
          completed: true,
          completedTasks: new Set()
        });
      }
      return newProgress;
    });
  };

  const toggleTaskComplete = (week: number, day: string, taskId: string) => {
    setProgress((prev) => {
      const newProgress = new Map(prev);
      const key = getDayKey(week, day);
      const existing = newProgress.get(key) || {
        week,
        day,
        completed: false,
        completedTasks: new Set<string>()
      };

      const newTasks = new Set(existing.completedTasks);
      if (newTasks.has(taskId)) {
        newTasks.delete(taskId);
      } else {
        newTasks.add(taskId);
      }

      newProgress.set(key, {
        ...existing,
        completedTasks: newTasks,
        completed: newTasks.size > 0 && existing.completed
      });

      return newProgress;
    });
  };

  const getDayProgress = (week: number, day: string): DayProgress | undefined => {
    return progress.get(getDayKey(week, day));
  };

  const getWeekProgress = (week: number, totalDays: number): WeekProgress => {
    let completedDays = 0;
    for (let i = 1; i <= totalDays; i++) {
      const dayProgress = Array.from(progress.values()).find(
        (p) => p.week === week && p.completed
      );
      if (dayProgress) completedDays++;
    }

    // Count actual completed days for this week
    const weekDays = Array.from(progress.values()).filter(
      (p) => p.week === week && p.completed
    );
    completedDays = weekDays.length;

    return {
      week,
      completedDays,
      totalDays,
      progress: totalDays > 0 ? (completedDays / totalDays) * 100 : 0
    };
  };

  const resetProgress = () => {
    setProgress(new Map());
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    progress,
    toggleDayComplete,
    toggleTaskComplete,
    getDayProgress,
    getWeekProgress,
    resetProgress
  };
}

