import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <Header />

      <main className="mx-auto max-w-7xl px-5 py-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}