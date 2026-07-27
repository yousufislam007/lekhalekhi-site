"use client";

import { useState } from "react";
import {
  X,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

export default function ContactModal({ open, onClose }) {
  const [copied, setCopied] = useState("");

  if (!open) return null;

  const copyText = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);

      setTimeout(() => {
        setCopied("");
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-emerald-700 to-teal-600 p-8 text-white">
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full bg-white/20 p-2 transition hover:bg-white/30"
          >
            <X size={20} />
          </button>

          <h2 className="text-3xl font-bold">📞 যোগাযোগ</h2>

          <p className="mt-2 text-white/90">
            যেকোনো সময় আমার সাথে যোগাযোগ করতে পারেন।
          </p>
        </div>

        {/* Body */}
        <div className="space-y-5 p-8">

          {/* Phone */}
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50">
            <a
              href="tel:+8801XXXXXXXXX"
              className="flex items-center gap-4 flex-1"
            >
              <Phone size={24} className="text-emerald-600" />

              <div>
                <p className="text-sm text-gray-500">মোবাইল</p>
                <p className="font-semibold text-emerald-700 hover:underline">
                  +8801XXXXXXXXX
                </p>
              </div>
            </a>

            <button
              onClick={() => copyText("+8801XXXXXXXXX", "phone")}
              className="ml-3 rounded-lg border p-2 transition hover:bg-emerald-100"
            >
              {copied === "phone" ? (
                <Check size={18} className="text-green-600" />
              ) : (
                <Copy size={18} />
              )}
            </button>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50">
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-4 flex-1"
            >
              <Mail size={24} className="text-emerald-600" />

              <div>
                <p className="text-sm text-gray-500">ইমেইল</p>
                <p className="font-semibold text-emerald-700 hover:underline">
                  your@email.com
                </p>
              </div>
            </a>

            <button
              onClick={() => copyText("your@email.com", "email")}
              className="ml-3 rounded-lg border p-2 transition hover:bg-emerald-100"
            >
              {copied === "email" ? (
                <Check size={18} className="text-green-600" />
              ) : (
                <Copy size={18} />
              )}
            </button>
          </div>

          {/* Facebook */}
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50">
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 flex-1"
            >
              <ExternalLink
                size={24}
                className="text-emerald-600"
              />

              <div>
                <p className="text-sm text-gray-500">Facebook</p>
                <p className="font-semibold text-emerald-700 hover:underline">
                  facebook.com/yourprofile
                </p>
              </div>
            </a>

            <button
              onClick={() =>
                copyText("https://facebook.com/yourprofile", "facebook")
              }
              className="ml-3 rounded-lg border p-2 transition hover:bg-emerald-100"
            >
              {copied === "facebook" ? (
                <Check size={18} className="text-green-600" />
              ) : (
                <Copy size={18} />
              )}
            </button>
          </div>

          {/* Website */}
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50">
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 flex-1"
            >
              <Globe
                size={24}
                className="text-emerald-600"
              />

              <div>
                <p className="text-sm text-gray-500">Website</p>
                <p className="font-semibold text-emerald-700 hover:underline">
                  yourwebsite.com
                </p>
              </div>
            </a>

            <button
              onClick={() =>
                copyText("https://yourwebsite.com", "website")
              }
              className="ml-3 rounded-lg border p-2 transition hover:bg-emerald-100"
            >
              {copied === "website" ? (
                <Check size={18} className="text-green-600" />
              ) : (
                <Copy size={18} />
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}