import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isAdminRequest } from '@/lib/auth';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export const runtime = 'nodejs';

// ভিডিও ফাইল সাইজ লিমিট (বাইটে) - প্রয়োজনমতো বদলাতে পারেন
const MAX_VIDEO_SIZE = 500 * 1024 * 1024; // 500MB
const ALLOWED_EXT = ['.mp4', '.mov', '.webm', '.mkv', '.avi'];

export async function GET(req) {
  const includeUnpublished = isAdminRequest(req);
  const videos = await prisma.video.findMany({
    where: includeUnpublished ? {} : { published: true },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(videos);
}

export async function POST(req) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 401 });
  }

  const formData = await req.formData();
  const title = formData.get('title');
  const description = formData.get('description') || '';
  const file = formData.get('video');

  if (!title || !file || typeof file === 'string') {
    return NextResponse.json({ error: 'টাইটেল এবং ভিডিও ফাইল দুটোই দরকার' }, { status: 400 });
  }

  if (file.size > MAX_VIDEO_SIZE) {
    return NextResponse.json({ error: 'ভিডিও ফাইলটি অনেক বড় (সর্বোচ্চ ৫০০MB)' }, { status: 400 });
  }

  const ext = path.extname(file.name || '').toLowerCase() || '.mp4';
  if (!ALLOWED_EXT.includes(ext)) {
    return NextResponse.json({ error: 'এই ফরম্যাটের ভিডিও সাপোর্ট করা হয় না' }, { status: 400 });
  }

  const filename = `${Date.now()}-${crypto.randomUUID()}${ext}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  fs.mkdirSync(uploadDir, { recursive: true });

  const bytes = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(path.join(uploadDir, filename), bytes);

  const video = await prisma.video.create({
    data: { title, description, filename },
  });

  return NextResponse.json(video, { status: 201 });
}
