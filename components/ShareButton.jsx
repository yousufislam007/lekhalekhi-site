"use client";

import { useState } from "react";
import ShareModal from "./ShareModal";

export default function ShareButton({
  title,
  url,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-gray-100"
      >
        📤 Share
      </button>

      <ShareModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        url={url}
      />
    </>
  );
}