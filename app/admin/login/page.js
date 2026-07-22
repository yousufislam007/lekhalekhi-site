'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push('/admin/dashboard');
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'লগইন ব্যর্থ হয়েছে');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-brand-100 rounded-2xl p-8 w-full max-w-sm space-y-5 shadow-sm"
      >
        <h1 className="text-2xl font-bold text-brand-700 text-center">Admin লগইন</h1>

        {error && (
          <p className="bg-red-50 text-red-700 text-sm px-4 py-2 rounded-lg">{error}</p>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">ইউজারনেম</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
            className="w-full border border-brand-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">পাসওয়ার্ড</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-brand-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 text-white py-2.5 rounded-lg hover:bg-brand-700 disabled:opacity-50"
        >
          {loading ? 'লগইন হচ্ছে...' : 'লগইন করুন'}
        </button>
      </form>
    </div>
  );
}
