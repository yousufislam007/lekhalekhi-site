import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = 'admin_token';

export function signAdminToken() {
  return jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyAdminToken(token) {
  if (!token) return false;
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload.role === 'admin';
  } catch (err) {
    return false;
  }
}

// Server Component / Server Action এর ভেতর থেকে ব্যবহারের জন্য
export function isAdminLoggedIn() {
  const token = cookies().get(COOKIE_NAME)?.value;
  return verifyAdminToken(token);
}

// API route handler এর ভেতর থেকে ব্যবহারের জন্য (Request থেকে সরাসরি cookie পড়া)
export function isAdminRequest(req) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  return verifyAdminToken(token);
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;
