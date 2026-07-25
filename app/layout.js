import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bangla",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "আমার লেখালেখি",
    template: "%s",
  },

  description:
    "গল্প, কবিতা, উপন্যাস এবং ব্যক্তিগত সাহিত্যভিত্তিক একটি বাংলা ওয়েবসাইট।",

  keywords: [
    "বাংলা গল্প",
    "বাংলা কবিতা",
    "উপন্যাস",
    "বাংলা সাহিত্য",
    "ছোট গল্প",
    "Bangla Story",
    "Bangla Poetry",
  ],

  authors: [
    {
      name: "ইউসুফ",
    },
  ],

  creator: "ইউসুফ",

  publisher: "ইউসুফ",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: siteUrl,
    siteName: "আমার লেখালেখি",
    title: "আমার লেখালেখি",
    description:
      "গল্প, কবিতা, উপন্যাস এবং ব্যক্তিগত সাহিত্যভিত্তিক একটি বাংলা ওয়েবসাইট।",
  },

  twitter: {
    card: "summary_large_image",
    title: "আমার লেখালেখি",
    description:
      "গল্প, কবিতা, উপন্যাস এবং ব্যক্তিগত সাহিত্যভিত্তিক একটি বাংলা ওয়েবসাইট।",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={`${hindSiliguri.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}