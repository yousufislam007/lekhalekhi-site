import { NextResponse } from 'next/server';
import { signAdminToken, ADMIN_COOKIE_NAME } from '@/lib/auth';

export async function POST(req) {
  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = signAdminToken();
    const res = NextResponse.json({ success: true });
    res.cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // ৭ দিন
    });
    return res;
  }

  return NextResponse.json({ error: 'ভুল ইউজারনেম অথবা পাসওয়ার্ড' }, { status: 401 });
}
