import { redirect } from 'next/navigation';
import Link from 'next/link';
import { isAdminLoggedIn } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import AdminNav from '@/components/AdminNav';
import DeleteButton from '@/components/DeleteButton';
import { CATEGORY_LABELS } from '@/lib/slug';

export default async function AdminPostsPage() {
  if (!isAdminLoggedIn()) redirect('/admin/login');

  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-brand-900">পোস্টসমূহ</h1>
          <Link
            href="/admin/dashboard/posts/new"
            className="bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 text-sm"
          >
            + নতুন পোস্ট
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-brand-900/60">এখনো কোনো পোস্ট নেই।</p>
        ) : (
          <div className="bg-white border border-brand-100 rounded-2xl overflow-hidden">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between gap-4 px-5 py-4 border-b border-brand-50 last:border-0"
              >
                <div>
                  <p className="font-medium text-brand-900">{post.title}</p>
                  <p className="text-xs text-brand-900/50 mt-1">
                    {CATEGORY_LABELS[post.category]} · {post.published ? 'পাবলিশড' : 'ড্রাফট'}
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <Link
                    href={`/admin/dashboard/posts/${post.id}/edit`}
                    className="text-sm text-brand-600 hover:underline"
                  >
                    এডিট
                  </Link>
                  <DeleteButton url={`/api/posts/${post.id}`} confirmText="পোস্টটি মুছে ফেলতে চান?" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
