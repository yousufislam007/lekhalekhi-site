import { prisma } from '@/lib/prisma';
import PostCard from '@/components/PostCard';

export const metadata = { title: 'কবিতা | আমার লেখালেখি' };

export default async function KobitaListPage() {
  const posts = await prisma.post.findMany({
    where: { category: 'kobita', published: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-brand-700 mb-8">কবিতা</h1>
      {posts.length === 0 ? (
        <p className="text-brand-900/60">এখনো কোনো কবিতা যোগ করা হয়নি।</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => <PostCard key={p.id} post={p} />)}
        </div>
      )}
    </div>
  );
}
