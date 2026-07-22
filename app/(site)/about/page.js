export const metadata = { title: 'আমার সম্পর্কে | আমার লেখালেখি' };

export default function AboutPage() {
  return (
    <article className="max-w-2xl mx-auto prose-bangla">
      <h1 className="text-3xl font-bold text-brand-700 mb-6">আমার সম্পর্কে</h1>
      <p className="mb-4">
        আমি একজন লেখক, লেখালেখি আমার কাছে নিজেকে প্রকাশ করার সবচেয়ে সহজ মাধ্যম।
        এই ওয়েবসাইটে আমি আমার লেখা ছোট গল্প, কবিতা আর উপন্যাস শেয়ার করি, পাশাপাশি
        মাঝে মাঝে কিছু ভিডিওও আপলোড করি।
      </p>
      <p>
        এই লেখাটা এডিট করে আপনার নিজের পরিচিতি বসিয়ে নিতে পারেন —
        ফাইলটা আছে <code>app/(site)/about/page.js</code> এখানে।
      </p>
    </article>
  );
}
