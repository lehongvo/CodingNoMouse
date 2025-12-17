'use server';

import { NextRequest, NextResponse } from 'next/server';

// In-memory store for rate limiting (fallback when Redis not available)
// Note: In serverless environments, this is per-instance, not shared
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_MAX_REQUESTS = 15; // 15 requests
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

// Clean up old entries periodically (every 5 minutes)
if (typeof global !== 'undefined') {
  const cleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.resetTime < now) {
        rateLimitStore.delete(key);
      }
    }
  }, 5 * 60 * 1000);

  // Clear interval on process exit (for serverless, this may not run)
  if (process.env.NODE_ENV !== 'production') {
    process.on('SIGTERM', () => clearInterval(cleanupInterval));
  }
}

/**
 * Get client identifier from request
 */
function getClientId(request: NextRequest): string {
  // Try to get IP from various headers (Vercel, Cloudflare, etc.)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  
  const ip = cfConnectingIp || realIp || forwarded?.split(',')[0] || 'unknown';
  
  // Also include user agent for additional uniqueness
  const userAgent = request.headers.get('user-agent') || 'unknown';
  
  return `${ip}-${userAgent.slice(0, 50)}`;
}

/**
 * Check rate limit for a request
 * Returns { allowed: boolean, remaining: number, resetTime: number }
 */
export async function checkRateLimit(
  request: NextRequest,
  customKey?: string
): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
  const clientId = customKey || getClientId(request);
  const now = Date.now();
  
  // Try to use Redis if available (for shared rate limiting across instances)
  try {
    const { getRedisClient } = await import('./redis');
    const redis = getRedisClient();
    
    if (redis) {
      const key = `ratelimit:${clientId}`;
      const current = await redis.get(key);
      
      if (current) {
        const { count, resetTime } = JSON.parse(current);
        
        if (resetTime > now) {
          // Still in the window
          if (count >= RATE_LIMIT_MAX_REQUESTS) {
            return {
              allowed: false,
              remaining: 0,
              resetTime
            };
          }
          
          // Increment count
          const newCount = count + 1;
          await redis.set(
            key,
            JSON.stringify({ count: newCount, resetTime }),
            'PX',
            resetTime - now
          );
          
          return {
            allowed: true,
            remaining: RATE_LIMIT_MAX_REQUESTS - newCount,
            resetTime
          };
        }
      }
      
      // New window or expired
      const resetTime = now + RATE_LIMIT_WINDOW_MS;
      await redis.set(
        key,
        JSON.stringify({ count: 1, resetTime }),
        'PX',
        RATE_LIMIT_WINDOW_MS
      );
      
      return {
        allowed: true,
        remaining: RATE_LIMIT_MAX_REQUESTS - 1,
        resetTime
      };
    }
  } catch (error) {
    // Redis not available, fallback to in-memory
    console.warn('Redis not available for rate limiting, using in-memory store');
  }
  
  // Fallback: In-memory rate limiting
  const stored = rateLimitStore.get(clientId);
  const resetTime = stored && stored.resetTime > now 
    ? stored.resetTime 
    : now + RATE_LIMIT_WINDOW_MS;
  
  if (stored && stored.resetTime > now) {
    // Still in the window
    if (stored.count >= RATE_LIMIT_MAX_REQUESTS) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: stored.resetTime
      };
    }
    
    // Increment count
    stored.count++;
    rateLimitStore.set(clientId, stored);
    
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - stored.count,
      resetTime: stored.resetTime
    };
  }
  
  // New window or expired
  rateLimitStore.set(clientId, { count: 1, resetTime });
  
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - 1,
    resetTime
  };
}

/**
 * Rate limit middleware for API routes
 * Returns NextResponse with 429 status if rate limited, null if allowed
 */
export async function rateLimitMiddleware(
  request: NextRequest
): Promise<NextResponse | null> {
  const result = await checkRateLimit(request);
  
  if (!result.allowed) {
    const retryAfter = Math.ceil((result.resetTime - Date.now()) / 1000);
    
    return NextResponse.json(
      {
        error: 'Too many requests',
        message: 'Rate limit exceeded. Please try again later.',
        retryAfter
      },
      {
        status: 429,
        headers: {
          'Retry-After': retryAfter.toString(),
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': result.remaining.toString(),
          'X-RateLimit-Reset': new Date(result.resetTime).toISOString()
        }
      }
    );
  }
  
  return null;
}

