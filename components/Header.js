"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";

const navLinks = [
  { href: "/", label: "হোম" },
  { href: "/chuto-golpo", label: "ছোট গল্প" },
  { href: "/kobita", label: "কবিতা" },
  { href: "/uponnash", label: "উপন্যাস" },
  { href: "/videos", label: "ভিডিও" },
  { href: "/about", label: "আমার সম্পর্কে" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-xl text-white shadow-lg transition duration-300 group-hover:rotate-6">
              ✍️
            </div>

            <div>
              <h1 className="text-xl font-extrabold text-gray-900 md:text-2xl">
                আমার লেখালেখি
              </h1>

              <p className="text-xs text-gray-500">
                গল্প • কবিতা • উপন্যাস
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-emerald-600 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/search"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100"
            >
              🔍
            </Link>

            <button
              onClick={() => setOpenContact(true)}
              className="rounded-full bg-emerald-600 px-5 py-2 font-semibold text-white transition hover:bg-emerald-700"
            >
              যোগাযোগ
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-gray-300 p-3 transition hover:bg-gray-100 lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold">
            মেনু
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col p-5">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-4 text-lg font-medium transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/search"
            onClick={() => setOpen(false)}
            className="mt-5 rounded-xl border px-4 py-4 text-center font-medium transition hover:bg-gray-100"
          >
            🔍 সার্চ
          </Link>

          <button
            onClick={() => {
              setOpen(false);
              setOpenContact(true);
            }}
            className="mt-3 rounded-xl bg-emerald-600 px-4 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
          >
            যোগাযোগ
          </button>
        </nav>
      </div>
    </>
  );
}