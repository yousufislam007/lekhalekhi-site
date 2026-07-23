"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
      return;
    }

    alert("🎉 সফলভাবে Newsletter-এ যুক্ত হয়েছেন!");

    setEmail("");

  } catch (error) {
    alert("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  }
};

  return (
    <section className="my-24">
      <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-emerald-900 via-emerald-700 to-teal-700 px-8 py-16 text-center text-white shadow-2xl">

        <div className="mx-auto max-w-3xl">

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            📬 Newsletter
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            নতুন লেখা সবার আগে পড়ুন
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            নতুন গল্প, কবিতা ও উপন্যাস প্রকাশিত হলেই
            আপনার ইমেইলে নোটিফিকেশন পাঠানো হবে।
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="আপনার ইমেইল লিখুন..."
              className="flex-1 rounded-full border-none px-6 py-4 text-gray-800 outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-gray-900 transition hover:scale-105 hover:bg-yellow-300"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-6 text-sm text-white/70">
            🔒 আপনার ইমেইল নিরাপদ থাকবে। আমরা কখনো স্প্যাম পাঠাব না।
          </p>

        </div>

      </div>
    </section>
  );
}