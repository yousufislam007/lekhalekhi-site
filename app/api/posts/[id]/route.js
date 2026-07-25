import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminRequest } from "@/lib/auth";

export async function GET(req, { params }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!post) {
    return NextResponse.json(
      { error: "পোস্ট পাওয়া যায়নি" },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}

export async function PUT(req, { params }) {
  if (!isAdminRequest(req)) {
    return NextResponse.json(
      { error: "অনুমতি নেই" },
      { status: 401 }
    );
  }

  const body = await req.json();

  const {
    title,
    content,
    category,
    excerpt,
    featuredImage,
    published,
  } = body;

 const plainText = content.replace(/<[^>]*>/g, "").trim();

const post = await prisma.post.update({
  where: {
    id: Number(params.id),
  },
  data: {
    title,
    content,
    category,
    excerpt: excerpt || plainText.slice(0, 180),
    featuredImage,
    published,
  },
});

  return NextResponse.json(post);
}

export async function DELETE(req, { params }) {
  if (!isAdminRequest(req)) {
    return NextResponse.json(
      { error: "অনুমতি নেই" },
      { status: 401 }
    );
  }

  await prisma.post.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json({
    success: true,
  });
}