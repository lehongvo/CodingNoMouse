'use server';

import { cookies } from 'next/headers';

const AUTH_COOKIE_NAME = 'learnskill-auth-token';
const AUTH_TOKEN = 'admin-authenticated';

export async function verifyAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME);
  return token?.value === AUTH_TOKEN;
}

export async function setAuthToken() {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, AUTH_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}

export async function clearAuthToken() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

export async function login(username: string, password: string): Promise<boolean> {
  const envUsername = process.env.USER_NAME;
  const envPassword = process.env.USER_PASSWORD;

  if (!envUsername || !envPassword) {
    console.error('USER_NAME or USER_PASSWORD not set in environment');
    return false;
  }

  if (username === envUsername && password === envPassword) {
    await setAuthToken();
    return true;
  }

  return false;
}




