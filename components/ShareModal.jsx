"use client";

import { useEffect, useState } from "react";

export default function ShareModal({
  open,
  onClose,
  title,
  url,
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);

    return () =>
      document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  async function copyLink() {
    await navigator.clipboard.writeText(url);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  async function nativeShare() {
    if (!navigator.share) return;

    try {
      await navigator.share({
        title,
        url,
      });

      onClose();
    } catch {}
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "Facebook",
      icon: "📘",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "WhatsApp",
      icon: "💬",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      name: "X",
      icon: "𝕏",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      name: "Telegram",
      icon: "✈️",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "LinkedIn",
      icon: "💼",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center">
          Share Article
        </h2>

        <p className="mt-2 text-center text-gray-500">
          এই লেখাটি বন্ধুদের সাথে শেয়ার করুন
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border p-3 transition hover:bg-gray-50"
            >
              <span className="text-2xl">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {navigator.share && (
          <button
            onClick={nativeShare}
            className="mt-4 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            📱 Share using device
          </button>
        )}

        <button
          onClick={copyLink}
          className="mt-3 w-full rounded-xl border py-3 font-medium transition hover:bg-gray-100"
        >
          {copied ? "✅ Link Copied" : "🔗 Copy Link"}
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full rounded-xl bg-gray-100 py-3 font-medium transition hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}