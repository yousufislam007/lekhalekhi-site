'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminNav() {
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  const links = [
    { href: '/admin/dashboard', label: 'ড্যাশবোর্ড' },
    { href: '/admin/dashboard/posts', label: 'পোস্টসমূহ' },
    { href: '/admin/dashboard/videos', label: 'ভিডিওসমূহ' },
  ];

  return (
    <div className="border-b border-brand-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-full text-sm ${
                pathname === l.href ? 'bg-brand-500 text-white' : 'hover:bg-brand-100 text-brand-900'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm text-brand-600 hover:underline" target="_blank">
            সাইট দেখুন ↗
          </Link>
          <button
            onClick={handleLogout}
            className="text-sm px-3 py-1.5 rounded-full border border-brand-300 hover:bg-brand-50"
          >
            লগআউট
          </button>
        </div>
      </div>
    </div>
  );
}
