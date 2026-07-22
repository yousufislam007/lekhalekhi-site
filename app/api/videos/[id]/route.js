import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isAdminRequest } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

export async function GET(req, { params }) {
  const video = await prisma.video.findUnique({ where: { id: Number(params.id) } });
  if (!video) return NextResponse.json({ error: 'ভিডিও পাওয়া যায়নি' }, { status: 404 });
  return NextResponse.json(video);
}

export async function DELETE(req, { params }) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 401 });
  }

  const video = await prisma.video.findUnique({ where: { id: Number(params.id) } });
  if (!video) return NextResponse.json({ error: 'ভিডিও পাওয়া যায়নি' }, { status: 404 });

  const filePath = path.join(process.cwd(), 'public', 'uploads', video.filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  await prisma.video.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ success: true });
}
