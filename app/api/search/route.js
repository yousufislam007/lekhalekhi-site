import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim();

  if (!q) {
    return NextResponse.json([]);
  }

  const posts = await prisma.post.findMany({
    where: {
      published: true,
      OR: [
        {
          title: {
            contains: q,
          },
        },
        {
          excerpt: {
            contains: q,
          },
        },
        {
          content: {
            contains: q,
          },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 20,
  });

  return NextResponse.json(posts);
}