'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteButton({ url, confirmText = 'আপনি কি নিশ্চিত এটা মুছে ফেলতে চান?' }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm(confirmText)) return;
    setLoading(true);
    const res = await fetch(url, { method: 'DELETE' });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      alert('মুছে ফেলা যায়নি, আবার চেষ্টা করুন।');
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-sm text-red-600 hover:underline disabled:opacity-50"
    >
      {loading ? 'মুছে ফেলা হচ্ছে...' : 'মুছুন'}
    </button>
  );
}
