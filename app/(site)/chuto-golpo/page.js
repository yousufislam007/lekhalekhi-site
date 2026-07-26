export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";

export const metadata = {
  title: "ছোট গল্প | আমার লেখালেখি",
};

export default async function GolpoListPage({
  searchParams,
}) {
  const page = Math.max(
    1,
    Number(searchParams?.page || 1)
  );
  const POSTS_PER_PAGE = 6;

  const totalPosts = await prisma.post.count({
    where: {
      category: "golpo",
      published: true,
    },
  });

  const posts = await prisma.post.findMany({
    where: {
      category: "golpo",
      published: true,
    },

    orderBy: {
      createdAt: "desc",
    },

    skip: (page - 1) * POSTS_PER_PAGE,

    take: POSTS_PER_PAGE,
  });

  const totalPages = Math.ceil(
    totalPosts / POSTS_PER_PAGE
  );

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-brand-700">
        ছোট গল্প
      </h1>

      {posts.length === 0 ? (
        <p className="text-brand-900/60">
          এখনো কোনো ছোট গল্প যোগ করা হয়নি।
        </p>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <PostCard
                key={p.id}
                post={p}
              />
            ))}
          </div>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}