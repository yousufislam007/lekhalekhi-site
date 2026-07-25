"use client";

import { usePathname } from "next/navigation";
import ShareButton from "./ShareButton";

export default function PostMeta({
  title,
  createdAt,
}) {
  const pathname = usePathname();

  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}${pathname}`
      : "";

  return (
    <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
      <p className="text-sm text-gray-500">
        📅{" "}
        {new Date(createdAt).toLocaleDateString("bn-BD", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <ShareButton
        title={title}
        url={url}
      />
    </div>
  );
}