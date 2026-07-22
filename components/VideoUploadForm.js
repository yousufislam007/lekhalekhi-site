'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VideoUploadForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!file) {
      setError('একটা ভিডিও ফাইল সিলেক্ট করুন');
      return;
    }
    setError('');
    setLoading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('video', file);

    // XHR ব্যবহার করা হচ্ছে যাতে আপলোড প্রোগ্রেস দেখানো যায়
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/videos');
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        setProgress(Math.round((event.loaded / event.total) * 100));
      }
    };
    xhr.onload = () => {
      setLoading(false);
      if (xhr.status >= 200 && xhr.status < 300) {
        router.push('/admin/dashboard/videos');
        router.refresh();
      } else {
        try {
          const data = JSON.parse(xhr.responseText);
          setError(data.error || 'আপলোড ব্যর্থ হয়েছে');
        } catch {
          setError('আপলোড ব্যর্থ হয়েছে');
        }
      }
    };
    xhr.onerror = () => {
      setLoading(false);
      setError('আপলোড ব্যর্থ হয়েছে, নেটওয়ার্ক চেক করুন');
    };
    xhr.send(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      {error && (
        <p className="bg-red-50 text-red-700 text-sm px-4 py-2 rounded-lg">{error}</p>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">টাইটেল</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-brand-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">বিবরণ (ঐচ্ছিক)</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full border border-brand-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">ভিডিও ফাইল (সর্বোচ্চ ৫০০MB)</label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
          className="w-full border border-brand-200 rounded-lg px-3 py-2"
        />
      </div>

      {loading && (
        <div className="w-full bg-brand-50 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-brand-600 h-2.5 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-brand-600 text-white px-5 py-2.5 rounded-lg hover:bg-brand-700 disabled:opacity-50"
      >
        {loading ? `আপলোড হচ্ছে... ${progress}%` : 'আপলোড করুন'}
      </button>
    </form>
  );
}
