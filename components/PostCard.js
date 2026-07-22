import Link from "next/link";
import { CATEGORY_LABELS, CATEGORY_PATHS } from "@/lib/slug";

export default function PostCard({ post }) {
  return (
    <Link
      href={`/${CATEGORY_PATHS[post.category]}/${post.slug}`}
      className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Cover */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-600 to-cyan-700">

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute bottom-5 left-5">

          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700">
            {CATEGORY_LABELS[post.category]}
          </span>

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold leading-8 text-gray-900 transition group-hover:text-emerald-700">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
            {post.excerpt}
          </p>
        )}

        <div className="mt-6 flex items-center justify-between">

          <p className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleDateString("bn-BD", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <span className="font-semibold text-emerald-700 transition group-hover:translate-x-2">
            পড়ুন →
          </span>

        </div>

      </div>

    </Link>
  );
}