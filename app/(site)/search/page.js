"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const POSTS_PER_PAGE = 6;

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setCurrentPage(1);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(query)}`
        );

        const data = await res.json();
        setResults(data);
        setCurrentPage(1);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const totalPages = Math.ceil(results.length / POSTS_PER_PAGE);

  const currentResults = results.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="mx-auto max-w-6xl py-16">

      {/* Header */}

      <div className="mb-12 text-center">
        <div className="text-6xl">🔍</div>

        <h1 className="mt-4 text-5xl font-extrabold text-gray-900">
          অনুসন্ধান
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          গল্প, কবিতা অথবা উপন্যাস খুঁজে নিন
        </p>
      </div>

      {/* Search */}

      <div className="relative">
        <input
          type="text"
          placeholder="খুঁজুন..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-gray-300 bg-white px-6 py-5 text-lg shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
        />
      </div>

      {/* Loading */}

      {loading && (
        <div className="mt-10 text-center text-gray-500">
          <div className="text-4xl animate-pulse">🔍</div>

          <p className="mt-3">
            খোঁজা হচ্ছে...
          </p>
        </div>
      )}

      {/* No Query */}

      {!loading && !query && (
        <div className="mt-14 rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">

          <div className="text-6xl">
            📖
          </div>

          <h2 className="mt-5 text-3xl font-bold text-gray-800">
            কী খুঁজতে চান?
          </h2>

          <p className="mt-3 text-gray-600">
            গল্প, কবিতা অথবা উপন্যাসের শিরোনাম লিখে অনুসন্ধান করুন।
          </p>

        </div>
      )}

      {/* Empty */}

      {!loading && query && results.length === 0 && (
        <div className="mt-14 rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">

          <div className="text-6xl">
            😔
          </div>

          <h2 className="mt-5 text-3xl font-bold text-gray-800">
            কোনো ফলাফল পাওয়া যায়নি
          </h2>

          <p className="mt-3 text-gray-600">
            "<strong>{query}</strong>" এর জন্য কোনো লেখা পাওয়া যায়নি।
          </p>

          <p className="mt-2 text-sm text-gray-500">
            অন্য কোনো শব্দ দিয়ে আবার চেষ্টা করুন।
          </p>

        </div>
      )}

      {/* Results */}

      {currentResults.length > 0 && (

        <>
          <div className="mt-12 mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              ফলাফল ({results.length})
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {currentResults.map((post) => (

              <Link
                key={post.id}
                href={`/${
                  post.category === "golpo"
                    ? "chuto-golpo"
                    : post.category
                }/${post.slug}`}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                  {post.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-emerald-700">
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="mt-3 line-clamp-3 text-gray-600">
                    {post.excerpt}
                  </p>
                )}

                <div className="mt-6 font-semibold text-emerald-700">
                  বিস্তারিত পড়ুন →
                </div>
              </Link>

            ))}

          </div>

          {/* Pagination */}

          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.max(p - 1, 1))
                }
                disabled={currentPage === 1}
                className="rounded-xl border px-4 py-2 disabled:opacity-40"
              >
                ← Previous
              </button>

              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`rounded-xl px-4 py-2 transition ${
                      page === currentPage
                        ? "bg-emerald-600 text-white"
                        : "border hover:bg-emerald-100"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() =>
                  setCurrentPage((p) =>
                    Math.min(p + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
                className="rounded-xl border px-4 py-2 disabled:opacity-40"
              >
                Next →
              </button>

            </div>
          )}
        </>
      )}
    </div>
  );
}