import { verifyAuth } from '@/lib/auth';
import { deleteProgress, getProgress, saveAllProgress, saveProgress } from '@/lib/redis';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/progress - Get user progress
export async function GET(request: NextRequest) {
  // Check authentication
  const isAuthenticated = await verifyAuth();
  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  try {
    // Single admin user - always use 'admin' as userId
    const progress = await getProgress('admin');
    
    // Return null if no progress (Redis might not be available, will use localStorage)
    return NextResponse.json({ progress }, { status: 200 });
  } catch (error) {
    // Don't fail the request, just return null - localStorage will handle it
    console.warn('Error in GET /api/progress (using localStorage fallback):', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ progress: null }, { status: 200 });
  }
}

// POST /api/progress - Save day progress
export async function POST(request: NextRequest) {
  // Check authentication
  const isAuthenticated = await verifyAuth();
  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { dayProgress } = body;
    
    if (!dayProgress) {
      return NextResponse.json(
        { error: 'dayProgress is required' },
        { status: 400 }
      );
    }
    
    // Single admin user - always use 'admin' as userId
    const success = await saveProgress(dayProgress, 'admin');
    
    if (!success) {
      return NextResponse.json(
        { error: 'Failed to save progress' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/progress:', error);
    return NextResponse.json(
      { error: 'Failed to save progress' },
      { status: 500 }
    );
  }
}

// PUT /api/progress - Save all progress at once
export async function PUT(request: NextRequest) {
  // Check authentication
  const isAuthenticated = await verifyAuth();
  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { progress } = body;
    
    if (!progress) {
      return NextResponse.json(
        { error: 'progress is required' },
        { status: 400 }
      );
    }
    
    // Single admin user - always use 'admin' as userId
    const success = await saveAllProgress(progress, 'admin');
    
    if (!success) {
      return NextResponse.json(
        { error: 'Failed to save progress' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in PUT /api/progress:', error);
    return NextResponse.json(
      { error: 'Failed to save progress' },
      { status: 500 }
    );
  }
}

// DELETE /api/progress - Delete user progress
export async function DELETE(request: NextRequest) {
  // Check authentication
  const isAuthenticated = await verifyAuth();
  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    // Single admin user - always use 'admin' as userId
    const success = await deleteProgress('admin');
    
    if (!success) {
      return NextResponse.json(
        { error: 'Failed to delete progress' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in DELETE /api/progress:', error);
    return NextResponse.json(
      { error: 'Failed to delete progress' },
      { status: 500 }
    );
  }
}

