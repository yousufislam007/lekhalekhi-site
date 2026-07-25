"use client";

import { usePathname } from "next/navigation";
import ShareButton from "./ShareButton";

export default function PostShareButton({ title }) {
  const pathname = usePathname();

  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}${pathname}`
      : "";

  return (
    <ShareButton
      title={title}
      url={url}
    />
  );
}
