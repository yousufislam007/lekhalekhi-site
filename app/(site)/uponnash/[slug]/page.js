import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export async function generateMetadata({ params }) {
  const slug = decodeURIComponent(params.slug);

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  return {
    title: post ? `${post.title} | আমার লেখালেখি` : "ছোট গল্প",
  };
}

export default async function UponnashSinglePage({ params }) {
  const slug = decodeURIComponent(params.slug);

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post || post.category !== "uponnash" || !post.published) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero Image */}
      {post.featuredImage && (
        <div className="relative mb-10 h-[250px] overflow-hidden rounded-3xl md:h-[450px]">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      {/* Category */}
      <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
        📖 ছোট গল্প
      </span>

      {/* Title */}
      <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
        {post.title}
      </h1>

      {/* Date */}
      <p className="mt-4 text-sm text-gray-500">
        {new Date(post.createdAt).toLocaleDateString("bn-BD", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <hr className="my-8" />

      {/* Content */}
      <div
        className="prose-bangla max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}