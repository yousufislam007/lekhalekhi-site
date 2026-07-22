import { redirect } from 'next/navigation';
import Link from 'next/link';
import { isAdminLoggedIn } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import AdminNav from '@/components/AdminNav';
import DeleteButton from '@/components/DeleteButton';

export default async function AdminVideosPage() {
  if (!isAdminLoggedIn()) redirect('/admin/login');

  const videos = await prisma.video.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-brand-900">ভিডিওসমূহ</h1>
          <Link
            href="/admin/dashboard/videos/new"
            className="bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 text-sm"
          >
            + নতুন ভিডিও আপলোড
          </Link>
        </div>

        {videos.length === 0 ? (
          <p className="text-brand-900/60">এখনো কোনো ভিডিও আপলোড করা হয়নি।</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-white border border-brand-100 rounded-2xl overflow-hidden">
                <video src={`/uploads/${video.filename}`} className="w-full aspect-video bg-black" controls preload="metadata" />
                <div className="p-4 flex items-center justify-between gap-2">
                  <p className="font-medium text-brand-900">{video.title}</p>
                  <DeleteButton url={`/api/videos/${video.id}`} confirmText="ভিডিওটি মুছে ফেলতে চান?" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
