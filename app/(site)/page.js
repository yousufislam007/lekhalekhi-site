import Link from "next/link";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";
import VideoCard from "@/components/VideoCard";
import Newsletter from "@/components/Newsletter";

async function getHomeData() {
  const [featured, golpo, kobita, uponnash, videos] = await Promise.all([
    prisma.post.findFirst({
      where: {
        published: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.post.findMany({
      where: { category: "golpo", published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
    }),

    prisma.post.findMany({
      where: { category: "kobita", published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
    }),

    prisma.post.findMany({
      where: { category: "uponnash", published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
    }),

    prisma.video.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      take: 2,
    }),
  ]);

  return {
    featured,
    golpo,
    kobita,
    uponnash,
    videos,
  };
}

export default async function HomePage() {
  const {
  featured,
  golpo,
  kobita,
  uponnash,
  videos,
} = await getHomeData();

  return (
    <main className="space-y-20">

      {/* HERO */}

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-700 to-teal-700 text-white">

        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl px-8 py-24 text-center">

          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur">
            ✍️ ব্যক্তিগত সাহিত্য ভাণ্ডার
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            আমার লেখালেখি
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/90">
            গল্প, কবিতা, উপন্যাস এবং জীবনের ছোট ছোট অনুভূতি নিয়ে
            তৈরি এই ব্যক্তিগত সাহিত্য ভুবনে আপনাকে স্বাগতম।
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link
              href="/chuto-golpo"
              className="rounded-full bg-white px-8 py-4 font-semibold text-emerald-700 transition hover:scale-105"
            >
              📖 গল্প পড়ুন
            </Link>

            <Link
              href="/kobita"
              className="rounded-full border border-white/30 px-8 py-4 transition hover:bg-white/10"
            >
              ✍️ কবিতা
            </Link>

            <Link
              href="/uponnash"
              className="rounded-full border border-white/30 px-8 py-4 transition hover:bg-white/10"
            >
              📚 উপন্যাস
            </Link>

            <Link
              href="/videos"
              className="rounded-full border border-white/30 px-8 py-4 transition hover:bg-white/10"
            >
              ▶ ভিডিও
            </Link>

          </div>

        </div>

      </section>

      {featured && (
  <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
    <div className="grid lg:grid-cols-2">
      {/* Left */}
      <div className="flex items-center bg-gradient-to-br from-emerald-700 to-teal-700 p-10 text-white">
        <div>
          <span className="rounded-full bg-yellow-300 px-3 py-1 text-sm font-semibold text-gray-900">
            ⭐ Featured Story
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight">
            {featured.title}
          </h2>

          {featured.excerpt && (
            <p className="mt-5 text-lg text-white/90">
              {featured.excerpt}
            </p>
          )}

          <Link
            href={`/${
              featured.category === "golpo"
                ? "chuto-golpo"
                : featured.category
            }/${featured.slug}`}
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:scale-105"
          >
            📖 পড়া শুরু করুন
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-center bg-gray-100 p-12">
        <div className="text-center">
          <div className="text-8xl">📚</div>

          <h3 className="mt-5 text-2xl font-bold text-gray-800">
            আজকের নির্বাচিত লেখা
          </h3>

          <p className="mt-3 text-gray-600">
            আমাদের সর্বশেষ প্রকাশিত গল্প, কবিতা বা উপন্যাস।
          </p>
        </div>
      </div>
    </div>
  </section>
)}

<Section
  title="📖 সর্বশেষ ছোট গল্প"
  href="/chuto-golpo"
  posts={golpo}
/>

<Section
  title="✍️ সাম্প্রতিক কবিতা"
  href="/kobita"
  posts={kobita}
/>

<Section
  title="📚 চলমান উপন্যাস"
  href="/uponnash"
  posts={uponnash}
/>

{videos.length > 0 && (
  <section>
    <div className="mb-8 flex items-center justify-between">
      <h2 className="text-3xl font-bold">
        🎥 সাম্প্রতিক ভিডিও
      </h2>

      <Link
        href="/videos"
        className="font-medium text-emerald-700 hover:underline"
      >
        সব ভিডিও →
      </Link>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  </section>
)}

<Newsletter />

    </main>
  );
}

function Section({
  title,
  href,
  posts,
}) {

  if (!posts.length) return null;

  return (

    <section>

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        <Link
          href={href}
          className="font-medium text-emerald-700 hover:underline"
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