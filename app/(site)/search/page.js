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
        setCurrentPage(1); // Reset to first page on new search
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

const totalPages = Math.ceil(
  results.length / POSTS_PER_PAGE
);

const currentResults = results.slice(
  (currentPage - 1) * POSTS_PER_PAGE,
  currentPage * POSTS_PER_PAGE
);

  return (
    <div className="mx-auto max-w-5xl py-16">

      <h1 className="mb-8 text-4xl font-bold">
        🔍 অনুসন্ধান
      </h1>

      <input
        type="text"
        placeholder="গল্প, কবিতা অথবা উপন্যাস লিখুন..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-2xl border border-gray-300 p-5 text-lg outline-none focus:border-emerald-600"
      />

      {loading && (
        <p className="mt-6 text-gray-500">
          খোঁজা হচ্ছে...
        </p>
      )}

      {!loading && query && results.length === 0 && (
        <p className="mt-6 text-red-500">
          কোনো ফলাফল পাওয়া যায়নি।
        </p>
      )}

      <div className="mt-10 space-y-6">

        {currentResults.map((post) => (

          <Link
            key={post.id}
            href={`/${post.category === "golpo"
              ? "chuto-golpo"
              : post.category}/${post.slug}`}
            className="block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              {post.category}
            </span>

            <h2 className="mt-3 text-2xl font-bold">
              {post.title}
            </h2>

            {post.excerpt && (
              <p className="mt-3 text-gray-600">
                {post.excerpt}
              </p>
            )}

          </Link>

        ))}

      </div>

      {totalPages > 1 && (
  <div className="mt-10 flex items-center justify-center gap-2">
    <button
      onClick={() =>
        setCurrentPage((p) => Math.max(p - 1, 1))
      }
      disabled={currentPage === 1}
      className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
    >
      ← Previous
    </button>

    {Array.from({ length: totalPages }).map((_, index) => {
      const page = index + 1;

      return (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`rounded-lg border px-4 py-2 transition ${
            page === currentPage
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-100"
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
      className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
    >
      Next →
    </button>
  </div>
)}

    </div>
  );
}