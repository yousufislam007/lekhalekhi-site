import Link from "next/link";

export default function Pagination({
  currentPage,
  totalPages,
}) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className="mt-12 flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      {/* Previous */}
      <Link
        href={
          currentPage > 1
            ? `?page=${currentPage - 1}`
            : "#"
        }
        className={`rounded-lg border px-4 py-2 transition ${
          currentPage === 1
            ? "pointer-events-none cursor-not-allowed opacity-40"
            : "hover:bg-emerald-600 hover:text-white"
        }`}
      >
        ← Previous
      </Link>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;

        return (
          <Link
            key={page}
            href={`?page=${page}`}
            className={`rounded-lg border px-4 py-2 transition ${
              currentPage === page
                ? "bg-emerald-600 text-white"
                : "hover:bg-emerald-100"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {/* Next */}
      <Link
        href={
          currentPage < totalPages
            ? `?page=${currentPage + 1}`
            : "#"
        }
        className={`rounded-lg border px-4 py-2 transition ${
          currentPage === totalPages
            ? "pointer-events-none cursor-not-allowed opacity-40"
            : "hover:bg-emerald-600 hover:text-white"
        }`}
      >
        Next →
      </Link>
    </nav>
  );
}