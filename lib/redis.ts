// This file should only be imported in server-side code (API routes)
// Mark as server-only to prevent client-side bundling
import Redis from 'ioredis';
import 'server-only';

// Create Redis client from REDIS_URL
let redis: Redis | null = null;

export function getRedisClient(): Redis | null {
  // Only create client in server environment
  if (typeof window !== 'undefined') {
    return null;
  }

  if (redis) {
    return redis;
  }

  const redisUrl = process.env.REDIS_URL;
  
  if (!redisUrl) {
    console.warn('REDIS_URL not set. Redis operations will be disabled.');
    return null;
  }

  // Check if REDIS_URL is a placeholder (database still provisioning)
  if (redisUrl.includes('database_provisioning_in_progress') || 
      redisUrl.includes('placeholder') ||
      redisUrl === 'redis://database_provisioning_in_progress') {
    console.warn('Redis database is still provisioning. Using localStorage fallback.');
    return null;
  }

  // Parse REDIS_URL (format: redis://username:password@host:port)
  try {
    redis = new Redis(redisUrl, {
      maxRetriesPerRequest: 1, // Reduce retries to fail faster
      enableReadyCheck: true,
      lazyConnect: true,
      connectTimeout: 5000, // 5 second timeout
      retryStrategy: (times) => {
        // Don't retry if already failed multiple times
        if (times > 2) {
          console.warn('Redis connection failed after multiple retries. Using localStorage fallback.');
          return null; // Stop retrying
        }
        return Math.min(times * 200, 2000);
      },
    });

    // Handle connection errors gracefully
    redis.on('error', (err) => {
      console.warn('Redis connection error:', err.message);
      // Don't throw, just log - we'll fallback to localStorage
    });

    redis.on('connect', () => {
      console.log('Redis connected successfully');
    });

  } catch (error) {
    console.error('Failed to create Redis client:', error);
    return null;
  }

  return redis;
}

// Types
export interface DayProgress {
  week: number;
  day: string;
  completed: boolean;
  completedTasks: string[];
  notes?: string;
  lastUpdated?: string;
}

export interface UserProgress {
  userId: string;
  progress: Record<string, DayProgress>;
  createdAt?: string;
  updatedAt?: string;
}

// Single admin user ID - only one user for this app
const ADMIN_USER_ID = 'admin';

// Get user ID - always return admin for single user system
function getUserId(): string {
  return ADMIN_USER_ID;
}

// Get progress for a user
export async function getProgress(userId?: string): Promise<UserProgress | null> {
  try {
    const client = getRedisClient();
    if (!client) {
      // Redis not available, return null (will use localStorage fallback)
      return null;
    }

    const id = userId || getUserId();
    const key = `progress:${id}`;
    
    const data = await client.get(key);
    if (!data) {
      return null;
    }
    
    return JSON.parse(data) as UserProgress;
  } catch (error) {
    // Silently fail and use localStorage fallback
    console.warn('Error getting progress from Redis (using localStorage fallback):', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

// Save progress for a user
export async function saveProgress(
  dayProgress: DayProgress,
  userId?: string
): Promise<boolean> {
  try {
    const client = getRedisClient();
    if (!client) {
      // Redis not available, return false (will use localStorage fallback)
      return false;
    }

    const id = userId || getUserId();
    const key = `progress:${id}`;
    
    // Get existing progress
    const existingData = await client.get(key);
    const existing: UserProgress | null = existingData 
      ? JSON.parse(existingData) 
      : null;
    
    const updated: UserProgress = {
      userId: id,
      progress: {
        ...(existing?.progress || {}),
        [`${dayProgress.week}-${dayProgress.day}`]: {
          ...dayProgress,
          lastUpdated: new Date().toISOString()
        }
      },
      createdAt: existing?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    await client.set(key, JSON.stringify(updated));
    return true;
  } catch (error) {
    // Silently fail and use localStorage fallback
    console.warn('Error saving progress to Redis (using localStorage fallback):', error instanceof Error ? error.message : 'Unknown error');
    return false;
  }
}

// Save all progress at once
export async function saveAllProgress(
  progress: Record<string, DayProgress>,
  userId?: string
): Promise<boolean> {
  try {
    const client = getRedisClient();
    if (!client) {
      // Redis not available, return false (will use localStorage fallback)
      return false;
    }

    const id = userId || getUserId();
    const key = `progress:${id}`;
    
    const existingData = await client.get(key);
    const existing: UserProgress | null = existingData 
      ? JSON.parse(existingData) 
      : null;
    
    const updated: UserProgress = {
      userId: id,
      progress: {
        ...(existing?.progress || {}),
        ...progress
      },
      createdAt: existing?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    await client.set(key, JSON.stringify(updated));
    return true;
  } catch (error) {
    // Silently fail and use localStorage fallback
    console.warn('Error saving all progress to Redis (using localStorage fallback):', error instanceof Error ? error.message : 'Unknown error');
    return false;
  }
}

// Delete progress for a user
export async function deleteProgress(userId?: string): Promise<boolean> {
  try {
    const client = getRedisClient();
    if (!client) {
      // Redis not available, return false
      return false;
    }

    const id = userId || getUserId();
    const key = `progress:${id}`;
    await client.del(key);
    return true;
  } catch (error) {
    // Silently fail
    console.warn('Error deleting progress from Redis:', error instanceof Error ? error.message : 'Unknown error');
    return false;
  }
}

