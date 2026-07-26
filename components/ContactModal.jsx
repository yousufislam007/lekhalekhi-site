"use client";

import {
  X,
  Mail,
  Phone,
  Globe,
  ExternalLink,
} from "lucide-react";

export default function ContactModal({ open, onClose }) {
  if (!open) return null;

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

          <h2 className="text-3xl font-bold">
            📞 যোগাযোগ
          </h2>

          <p className="mt-2 text-white/90">
            যেকোনো সময় আমার সাথে যোগাযোগ করতে পারেন।
          </p>
        </div>

        {/* Body */}
        <div className="space-y-5 p-8">

          {/* Phone */}
          <a
            href="tel:+8801XXXXXXXXX"
            className="flex items-center gap-4 rounded-2xl border border-gray-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50"
          >
            <Phone size={24} className="text-emerald-600" />

            <div>
              <p className="text-sm text-gray-500">
                মোবাইল
              </p>

              <p className="font-semibold">
                +8801XXXXXXXXX
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-4 rounded-2xl border border-gray-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50"
          >
            <Mail size={24} className="text-emerald-600" />

            <div>
              <p className="text-sm text-gray-500">
                ইমেইল
              </p>

              <p className="font-semibold">
                your@email.com
              </p>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-gray-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50"
          >
            <ExternalLink
              size={24}
              className="text-emerald-600"
            />

            <div>
              <p className="text-sm text-gray-500">
                Facebook
              </p>

              <p className="font-semibold">
                facebook.com/yourprofile
              </p>
            </div>
          </a>

          {/* Website */}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-gray-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50"
          >
            <Globe
              size={24}
              className="text-emerald-600"
            />

            <div>
              <p className="text-sm text-gray-500">
                Website
              </p>

              <p className="font-semibold">
                yourwebsite.com
              </p>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}