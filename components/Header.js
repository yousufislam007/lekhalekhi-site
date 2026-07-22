import Link from "next/link";

const navLinks = [
  { href: "/", label: "হোম" },
  { href: "/chuto-golpo", label: "ছোট গল্প" },
  { href: "/kobita", label: "কবিতা" },
  { href: "/uponnash", label: "উপন্যাস" },
  { href: "/videos", label: "ভিডিও" },
  { href: "/about", label: "আমার সম্পর্কে" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link href="/" className="group">
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-xl text-white shadow-lg transition duration-300 group-hover:rotate-6">
              ✍️
            </div>

            <div>

              <h1 className="text-2xl font-extrabold text-gray-900">
                আমার লেখালেখি
              </h1>

              <p className="text-xs text-gray-500">
                গল্প • কবিতা • উপন্যাস
              </p>

            </div>

          </div>
        </Link>

        {/* Menu */}

        <nav className="hidden lg:flex items-center gap-2">

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-5 py-2 text-[15px] font-medium text-gray-700 transition-all duration-300 hover:bg-emerald-600 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

        </nav>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-3">

          <Link
  href="/search"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100"
>
  🔍
</Link>

          <button className="rounded-full bg-emerald-600 px-5 py-2 font-semibold text-white transition hover:bg-emerald-700">
            যোগাযোগ
          </button>

        </div>

        {/* Mobile Button */}

        <button className="lg:hidden rounded-xl border p-3 text-xl">
          ☰
        </button>

      </div>
    </header>
  );
}