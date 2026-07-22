import { redirect } from 'next/navigation';
import Link from 'next/link';
import { isAdminLoggedIn } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import AdminNav from '@/components/AdminNav';

export default async function DashboardPage() {
  if (!isAdminLoggedIn()) redirect('/admin/login');

  const [postCount, videoCount] = await Promise.all([
    prisma.post.count(),
    prisma.video.count(),
  ]);

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-brand-900 mb-8">ড্যাশবোর্ড</h1>
        <div className="grid sm:grid-cols-2 gap-6">
          <Link
            href="/admin/dashboard/posts"
            className="bg-white border border-brand-100 rounded-2xl p-6 hover:shadow-md transition"
          >
            <p className="text-sm text-brand-900/60">মোট পোস্ট</p>
            <p className="text-4xl font-bold text-brand-700 mt-2">{postCount}</p>
            <p className="text-sm text-brand-600 mt-3">পোস্টসমূহ পরিচালনা করুন →</p>
          </Link>
          <Link
            href="/admin/dashboard/videos"
            className="bg-white border border-brand-100 rounded-2xl p-6 hover:shadow-md transition"
          >
            <p className="text-sm text-brand-900/60">মোট ভিডিও</p>
            <p className="text-4xl font-bold text-brand-700 mt-2">{videoCount}</p>
            <p className="text-sm text-brand-600 mt-3">ভিডিওসমূহ পরিচালনা করুন →</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
