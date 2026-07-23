import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <h2 className="text-4xl font-extrabold">
              আমার লেখালেখি
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-emerald-100/80">
              গল্প, কবিতা, উপন্যাস এবং জীবনের ছোট ছোট অনুভূতিগুলোকে
              শব্দে প্রকাশ করার একটি ছোট্ট প্রচেষ্টা। এই সাহিত্যভুবনে
              আপনাকে আন্তরিক স্বাগতম।
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-xl font-bold text-yellow-300">
              দ্রুত লিংক
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/"
                  className="text-emerald-100 transition hover:text-yellow-300"
                >
                  হোম
                </Link>
              </li>

              <li>
                <Link
                  href="/chuto-golpo"
                  className="text-emerald-100 transition hover:text-yellow-300"
                >
                  ছোট গল্প
                </Link>
              </li>

              <li>
                <Link
                  href="/kobita"
                  className="text-emerald-100 transition hover:text-yellow-300"
                >
                  কবিতা
                </Link>
              </li>

              <li>
                <Link
                  href="/uponnash"
                  className="text-emerald-100 transition hover:text-yellow-300"
                >
                  উপন্যাস
                </Link>
              </li>

              <li>
                <Link
                  href="/videos"
                  className="text-emerald-100 transition hover:text-yellow-300"
                >
                  ভিডিও
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 text-xl font-bold text-yellow-300">
              যোগাযোগ
            </h3>

            <ul className="space-y-3 text-emerald-100">

              <li>📧 your@email.com</li>

              <li>📍 বাংলাদেশ</li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-yellow-300"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-yellow-300"
                >
                  YouTube
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-emerald-100/70">
              © {year}{" "}
              <span className="font-semibold text-yellow-300">
                আমার লেখালেখি
              </span>
              । সর্বস্বত্ব সংরক্ষিত।
            </p>

            <div className="flex gap-6 text-sm">

              <Link
                href="/about"
                className="text-emerald-100 hover:text-yellow-300 transition"
              >
                আমার সম্পর্কে
              </Link>

              <Link
                href="/videos"
                className="text-emerald-100 hover:text-yellow-300 transition"
              >
                ভিডিও
              </Link>

              <Link
                href="/admin/login"
                className="text-emerald-100 hover:text-yellow-300 transition"
              >
                Admin
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}