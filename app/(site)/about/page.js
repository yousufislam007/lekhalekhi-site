import Image from "next/image";
import Link from "next/link";
import AboutContactCTA from "@/components/AboutContactCTA";
import FadeInSection from "@/components/FadeInSection";

export const metadata = {
  title: "আমার সম্পর্কে | আমার লেখালেখি",
};

export default function AboutPage() {
  return (
    <main className="space-y-14 md:space-y-20">

      {/* Hero */}
<FadeInSection delay={0}>

<section className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-700 to-teal-700 px-5 py-16 md:px-8 md:py-24 text-white">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur">
            ✍️ লেখকের পরিচিতি
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:mt-8 md:text-6xl">
            আমার সম্পর্কে
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/90 sm:text-lg md:mt-8 md:leading-9">
            শব্দের মাধ্যমে অনুভূতি, জীবন, ভালোবাসা এবং
            মানুষের গল্প তুলে ধরার একটি ছোট্ট প্রচেষ্টা।
          </p>

        </div>

      </section>

</FadeInSection>

      {/* Photo + About */}
<FadeInSection delay={0.1}>

     <section className="grid items-center gap-10 lg:grid-cols-2">

  {/* Photo */}
  <div className="flex justify-center">
    <div className="w-full max-w-sm rounded-3xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-3 md:max-w-md md:p-4 shadow-2xl">

      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gray-200">

        <Image
          src="/author.jpg"
          alt="ইউসুফ ইসলাম মিছবাহ"
          fill
          sizes="(max-width: 768px) 90vw, 380px"
          className="object-cover transition duration-500 hover:scale-105"
          priority
        />

      </div>

    </div>
  </div>
        {/* About */}

        <div>

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            👋 পরিচয়
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-4xl">            আমি ইউসুফ,
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-gray-600 md:text-lg md:leading-9">
            <p>
              ছোটবেলা থেকেই বই পড়া, গল্প শোনা এবং
              অনুভূতিগুলোকে শব্দে প্রকাশ করার প্রতি
              আমার গভীর আগ্রহ।
            </p>

            <p>
              এই ওয়েবসাইটে আমার লেখা ছোট গল্প,
              কবিতা ও উপন্যাস একত্রে প্রকাশ করছি,
              যাতে পাঠক সহজেই সব লেখা পড়তে পারেন।
            </p>

            <p>
              আমার বিশ্বাস, একটি সুন্দর লেখা মানুষের
              হৃদয়ে দীর্ঘদিন বেঁচে থাকে।
            </p>

          </div>

          <div className="mt-10 border-l-4 border-emerald-600 pl-6">

            <p className="text-2xl font-bold text-gray-900">
              ইউসুফ ইসলাম মিছবাহ
            </p>

            <p className="mt-2 text-emerald-700">
              লেখক • গল্পকার 
            </p>

          </div>

        </div>

      </section>

</FadeInSection>

      {/* Statistics */}
<FadeInSection delay={0.2}>
  
<section className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 md:p-10">
  <div className="mb-10 text-center">
    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
      📊 কিছু তথ্য
    </span>

    <h2 className="mt-4 text-2xl font-bold md:text-4xl">
      লেখালেখির ছোট্ট পরিসংখ্যান
    </h2>

    <p className="mt-3 text-base text-gray-600 md:text-lg">
      প্রতিটি লেখা আমার অনুভূতির একটি অংশ।
    </p>
  </div>

  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

    <div className="flex min-h-[170px] flex-col items-center justify-center rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:min-h-[220px] md:p-8">
      <div className="text-4xl md:text-5xl">📖</div>

      <h3 className="mt-4 text-3xl font-extrabold leading-none text-emerald-700 md:text-5xl">
        ১৫+
      </h3>

      <p className="mt-2 text-sm text-gray-600 md:text-base">
        ছোট গল্প
      </p>
    </div>

    <div className="flex min-h-[170px] flex-col items-center justify-center rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:min-h-[220px] md:p-8">
      <div className="text-4xl md:text-5xl">✍️</div>

      <h3 className="mt-4 text-3xl font-extrabold leading-none text-emerald-700 md:text-5xl">
        ৪৫+
      </h3>

      <p className="mt-2 text-sm text-gray-600 md:text-base">
        কবিতা
      </p>
    </div>

    <div className="flex min-h-[170px] flex-col items-center justify-center rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:min-h-[220px] md:p-8">
      <div className="text-4xl md:text-5xl">📚</div>

      <h3 className="mt-4 text-3xl font-extrabold leading-none text-emerald-700 md:text-5xl">
        ৩+
      </h3>

      <p className="mt-2 text-sm text-gray-600 md:text-base">
        উপন্যাস
      </p>
    </div>

    <div className="flex min-h-[170px] flex-col items-center justify-center rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:min-h-[220px] md:p-8">
      <div className="text-4xl md:text-5xl">❤️</div>

      <h3 className="mt-4 text-3xl font-extrabold leading-none text-emerald-700 md:text-5xl">
        ১২০০+
      </h3>

      <p className="mt-2 text-sm text-gray-600 md:text-base">
        পাঠক
      </p>
    </div>

  </div>
</section>

</FadeInSection>

{/* Writing Topics */}

<FadeInSection delay={0.3}>

<section>

  <div className="mb-12 text-center">

    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
      ✍️ আমার লেখার বিষয়
    </span>

    <h2 className="mt-5 text-4xl font-bold text-gray-900">
      আমি যা নিয়ে লিখতে ভালোবাসি
    </h2>

    <p className="mt-4 text-lg text-gray-600">
      জীবনের বিভিন্ন অনুভূতি, অভিজ্ঞতা এবং কল্পনার জগৎ আমার লেখার প্রধান অনুপ্রেরণা।
    </p>

  </div>

  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

    <div className="group rounded-3xl border border-gray-200 bg-white p-6 md:p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-600 hover:bg-gradient-to-br hover:from-emerald-600 hover:to-teal-600 hover:text-white hover:shadow-2xl">
      <div className="text-5xl">❤️</div>
      <h3 className="mt-5 text-xl md:text-2xl font-bold">ভালোবাসা</h3>
      <p className="mt-3 text-gray-600 group-hover:text-white/90">
        সম্পর্ক, অনুভূতি এবং হৃদয়ের গল্প।
      </p>
    </div>

    <div className="group rounded-3xl border border-gray-200 bg-white p-6 md:p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-600 hover:bg-gradient-to-br hover:from-emerald-600 hover:to-teal-600 hover:text-white hover:shadow-2xl">
      <div className="text-5xl">🌿</div>
      <h3 className="mt-5 text-xl md:text-2xl font-bold">প্রকৃতি</h3>
      <p className="mt-3 text-gray-600 group-hover:text-white/90">
        প্রকৃতির সৌন্দর্য ও জীবনের শান্ত মুহূর্ত।
      </p>
    </div>

    <div className="group rounded-3xl border border-gray-200 bg-white p-6 md:p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-600 hover:bg-gradient-to-br hover:from-emerald-600 hover:to-teal-600 hover:text-white hover:shadow-2xl">
      <div className="text-5xl">😊</div>
      <h3 className="mt-5 text-xl md:text-2xl font-bold">জীবন</h3>
      <p className="mt-3 text-gray-600 group-hover:text-white/90">
        বাস্তব জীবন, সংগ্রাম ও অনুপ্রেরণার গল্প।
      </p>
    </div>

    <div className="group rounded-3xl border border-gray-200 bg-white p-6 md:p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-600 hover:bg-gradient-to-br hover:from-emerald-600 hover:to-teal-600 hover:text-white hover:shadow-2xl">
      <div className="text-5xl">🌙</div>
      <h3 className="mt-5 text-xl md:text-2xl font-bold">অনুভূতি</h3>
      <p className="mt-3 text-gray-600 group-hover:text-white/90">
        মনের গভীরে লুকিয়ে থাকা আবেগের প্রকাশ।
      </p>
    </div>

    <div className="group rounded-3xl border border-gray-200 bg-white p-6 md:p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-600 hover:bg-gradient-to-br hover:from-emerald-600 hover:to-teal-600 hover:text-white hover:shadow-2xl">
      <div className="text-5xl">📖</div>
      <h3 className="mt-5 text-xl md:text-2xl font-bold">কল্পকাহিনী</h3>
      <p className="mt-3 text-gray-600 group-hover:text-white/90">
        কল্পনার জগতে নতুন চরিত্র ও গল্পের সৃষ্টি।
      </p>
    </div>

    <div className="group rounded-3xl border border-gray-200 bg-white p-6 md:p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-600 hover:bg-gradient-to-br hover:from-emerald-600 hover:to-teal-600 hover:text-white hover:shadow-2xl">
      <div className="text-5xl">💭</div>
      <h3 className="mt-5 text-xl md:text-2xl font-bold">বাস্তবতা</h3>
      <p className="mt-3 text-gray-600 group-hover:text-white/90">
        সমাজ, মানুষ এবং বাস্তব জীবনের গল্প।
      </p>
    </div>

  </div>

</section>

</FadeInSection>

{/* Quote Section */}

<FadeInSection delay={0.4}>

<section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-700 to-teal-700 px-5 py-16 md:px-8 md:py-24 text-center text-white">

  {/* Background Blur */}
  <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

  <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl"></div>

  <div className="relative mx-auto max-w-4xl">

    <div className="mb-8 text-5xl md:text-7xl opacity-30">
      “
    </div>

    <blockquote className="text-2xl font-bold leading-relaxed md:text-5xl">

      লেখা শুধু শব্দ নয়,
      <br />
      এটি অনুভূতির আরেকটি ভাষা।

    </blockquote>

    <div className="mx-auto mt-10 h-1 w-20 rounded-full bg-white/40"></div>

    <p className="mt-8 text-xl text-white/90">
      — ইউসুফ ইসলাম মিছবাহ
    </p>

    <p className="mt-2 text-sm tracking-[0.3em] uppercase text-white/60">
      Writer • Storyteller
    </p>

  </div>

</section>

</FadeInSection>

{/* Contact CTA */}

<div className="pt-4 md:pt-8">
  <AboutContactCTA />
</div>

    </main>
  );
}