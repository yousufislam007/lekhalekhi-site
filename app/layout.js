import { Hind_Siliguri } from 'next/font/google';
import './globals.css';

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bangla',
});

export const metadata = {
  title: 'আমার লেখালেখি',
  description: 'গল্প, কবিতা, উপন্যাস আর ভিডিও নিয়ে একটি ব্যক্তিগত সাহিত্য ওয়েবসাইট',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={`${hindSiliguri.className} antialiased`}>{children}</body>
    </html>
  );
}
