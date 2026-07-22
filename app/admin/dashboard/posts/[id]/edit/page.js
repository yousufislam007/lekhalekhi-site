import { redirect, notFound } from 'next/navigation';
import { isAdminLoggedIn } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import AdminNav from '@/components/AdminNav';
import PostForm from '@/components/PostForm';

export default async function EditPostPage({ params }) {
  if (!isAdminLoggedIn()) redirect('/admin/login');

  const post = await prisma.post.findUnique({ where: { id: Number(params.id) } });
  if (!post) notFound();

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-brand-900 mb-8">পোস্ট এডিট করুন</h1>
        <PostForm postId={post.id} initialData={post} />
      </div>
    </div>
  );
}
