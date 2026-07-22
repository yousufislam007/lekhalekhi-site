'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORIES = [
  { value: 'golpo', label: 'ছোট গল্প' },
  { value: 'kobita', label: 'কবিতা' },
  { value: 'uponnash', label: 'উপন্যাস' },
];

export default function PostForm({ initialData, postId }) {
  const router = useRouter();
  const isEdit = Boolean(postId);

  const [title, setTitle] = useState(initialData?.title || '');
  const [category, setCategory] = useState(initialData?.category || 'golpo');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [published, setPublished] = useState(initialData?.published ?? true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const url = isEdit ? `/api/posts/${postId}` : '/api/posts';
    const method = isEdit ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, category, excerpt, content, published }),
    });

    setLoading(false);

    if (res.ok) {
      router.push('/admin/dashboard/posts');
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করুন।');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
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
        <label className="block text-sm font-medium mb-1">ক্যাটাগরি</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-brand-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)</label>
        <input
          type="text"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="লিস্ট পেজে দেখানোর জন্য ছোট একটা বিবরণ"
          className="w-full border border-brand-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">লেখার মূল অংশ</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={14}
          className="w-full border border-brand-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 leading-relaxed"
        />
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
        />
        সাইটে পাবলিশ করা থাকবে
      </label>

      <button
        type="submit"
        disabled={loading}
        className="bg-brand-600 text-white px-5 py-2.5 rounded-lg hover:bg-brand-700 disabled:opacity-50"
      >
        {loading ? 'সেভ হচ্ছে...' : isEdit ? 'আপডেট করুন' : 'পাবলিশ করুন'}
      </button>
    </form>
  );
}
