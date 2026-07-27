"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function AboutContactCTA() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 px-8 py-20 text-center text-white shadow-2xl">

        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-3xl">

          <div className="mb-6 text-6xl">
            📞
          </div>

          <h2 className="text-4xl font-extrabold">
            আমার সাথে যোগাযোগ করতে চান?
          </h2>

          <p className="mt-6 text-lg leading-9 text-white/90">
            আপনার মতামত, পরামর্শ, শুভেচ্ছা কিংবা
            যেকোনো বিষয়ে আলোচনা করতে চাইলে
            নির্দ্বিধায় আমার সাথে যোগাযোগ করতে পারেন।
          </p>

          <button
            onClick={() => setOpenContact(true)}
            className="mt-10 rounded-full bg-white px-10 py-4 text-lg font-bold text-emerald-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-emerald-50"
          >
            📩 যোগাযোগ করুন
          </button>

        </div>

      </section>
    </>
  );
}