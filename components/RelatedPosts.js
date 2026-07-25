import Link from "next/link";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";

export default async function RelatedPosts({
  category,
  currentPostId,
}) {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      category,
      NOT: {
        id: currentPostId,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 border-t pt-12">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          📚 আরও পড়তে পারেন
        </h2>

        <Link
          href={
            category === "golpo"
              ? "/chuto-golpo"
              : `/${category}`
          }
          className="text-emerald-700 hover:underline"
        >
          সব দেখুন →
        </Link>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>

    </section>
  );
}