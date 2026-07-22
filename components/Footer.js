import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-brand-100 bg-brand-50">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-brand-900/80">
        <p>© {year} আমার লেখালেখি। সর্বস্বত্ব সংরক্ষিত।</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-brand-700">আমার সম্পর্কে</Link>
          <Link href="/videos" className="hover:text-brand-700">ভিডিও</Link>
          <Link href="/admin/login" className="hover:text-brand-700">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
