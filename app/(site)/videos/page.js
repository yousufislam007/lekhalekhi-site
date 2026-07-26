export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import VideoCard from "@/components/VideoCard";

export const metadata = {
  title: "ভিডিও | আমার লেখালেখি",
};

export default async function VideosPage() {
  const videos = await prisma.video.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-brand-700">
        ভিডিও
      </h1>

      {videos.length === 0 ? (
        <p className="text-brand-900/60">
          এখনো কোনো ভিডিও আপলোড করা হয়নি।
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}