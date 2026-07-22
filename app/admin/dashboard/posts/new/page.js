import { redirect } from 'next/navigation';
import { isAdminLoggedIn } from '@/lib/auth';
import AdminNav from '@/components/AdminNav';
import PostForm from '@/components/PostForm';

export default function NewPostPage() {
  if (!isAdminLoggedIn()) redirect('/admin/login');

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-brand-900 mb-8">নতুন পোস্ট</h1>
        <PostForm />
      </div>
    </div>
  );
}
