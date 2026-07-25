import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function PostNavigation({
  currentPostId,
  category,
}) {
  const previousPost = await prisma.post.findFirst({
    where: {
      published: true,
      category,
      id: {
        lt: currentPostId,
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  const nextPost = await prisma.post.findFirst({
    where: {
      published: true,
      category,
      id: {
        gt: currentPostId,
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  const categoryPath =
    category === "golpo"
      ? "/chuto-golpo"
      : `/${category}`;

  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-gray-200 pt-8">
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          {previousPost && (
            <Link
              href={`${categoryPath}/${previousPost.slug}`}
              className="block rounded-2xl border p-6 transition hover:border-emerald-500 hover:shadow-lg"
            >
              <p className="mb-2 text-sm text-gray-500">
                ← আগের লেখা
              </p>

              <h3 className="font-semibold text-lg">
                {previousPost.title}
              </h3>
            </Link>
          )}
        </div>

        <div>
          {nextPost && (
            <Link
              href={`${categoryPath}/${nextPost.slug}`}
              className="block rounded-2xl border p-6 text-right transition hover:border-emerald-500 hover:shadow-lg"
            >
              <p className="mb-2 text-sm text-gray-500">
                পরের লেখা →
              </p>

              <h3 className="font-semibold text-lg">
                {nextPost.title}
              </h3>
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}