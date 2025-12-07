import { clearAuthToken } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    await clearAuthToken();
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in logout:', error);
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}

