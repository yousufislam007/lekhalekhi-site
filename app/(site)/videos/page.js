export const dynamic = "force-dynamic";
import { prisma } from '@/lib/prisma';
import VideoCard from '@/components/VideoCard';

export const metadata = { title: 'ভিডিও | আমার লেখালেখি' };

export default async function VideosPage() {
  const videos = await prisma.video.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  });

  console.log("VIDEOS PAGE:", videos);

  return (
    <div>
      <h1 className="text-3xl font-bold text-brand-700 mb-8">ভিডিও</h1>
      {videos.length === 0 ? (
        <p className="text-brand-900/60">এখনো কোনো ভিডিও আপলোড করা হয়নি।</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {videos.map((v) => <VideoCard key={v.id} video={v} />)}
        </div>
      )}
    </div>
  );
}
