"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

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
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

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

        {results.map((post) => (

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

    </div>
  );
}