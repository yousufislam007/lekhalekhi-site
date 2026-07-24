import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminRequest } from "@/lib/auth";
import { slugify } from "@/lib/slug";

const VALID_CATEGORIES = [
  "golpo",
  "kobita",
  "uponnash",
];

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category");

  const includeUnpublished = isAdminRequest(req);

  const posts = await prisma.post.findMany({
    where: {
      ...(category ? { category } : {}),
      ...(includeUnpublished ? {} : { published: true }),
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(posts);
}

export async function POST(req) {
  if (!isAdminRequest(req)) {
    return NextResponse.json(
      {
        error: "অনুমতি নেই",
      },
      {
        status: 401,
      }
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

  if (
    !title ||
    !content ||
    !VALID_CATEGORIES.includes(category)
  ) {
    return NextResponse.json(
      {
        error: "টাইটেল, কনটেন্ট এবং সঠিক ক্যাটাগরি দিন",
      },
      {
        status: 400,
      }
    );
  }

  const post = await prisma.post.create({
    data: {
      title,
      content,
      excerpt: excerpt || content.slice(0, 150),
      category,
      slug: slugify(title),
      featuredImage,
      published: published !== false,
    },
  });

  return NextResponse.json(post, {
    status: 201,
  });
}