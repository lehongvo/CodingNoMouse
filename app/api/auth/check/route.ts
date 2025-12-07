import { verifyAuth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const isAuthenticated = await verifyAuth();
    return NextResponse.json({ authenticated: isAuthenticated }, { status: 200 });
  } catch (error) {
    console.error('Error checking auth:', error);
    return NextResponse.json(
      { error: 'Failed to check authentication' },
      { status: 500 }
    );
  }
}

