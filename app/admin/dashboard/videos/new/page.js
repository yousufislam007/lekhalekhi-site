import { redirect } from 'next/navigation';
import { isAdminLoggedIn } from '@/lib/auth';
import AdminNav from '@/components/AdminNav';
import VideoUploadForm from '@/components/VideoUploadForm';

export default function NewVideoPage() {
  if (!isAdminLoggedIn()) redirect('/admin/login');

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-brand-900 mb-8">নতুন ভিডিও আপলোড</h1>
        <VideoUploadForm />
      </div>
    </div>
  );
}
