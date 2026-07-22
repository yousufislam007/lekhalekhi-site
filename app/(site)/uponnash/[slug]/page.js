import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export async function generateMetadata({ params }) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } });
  return { title: post ? `${post.title} | আমার লেখালেখি` : 'উপন্যাস' };
}

export default async function UponnashSinglePage({ params }) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } });

  if (!post || post.category !== 'uponnash' || !post.published) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto">
      <span className="text-xs font-medium text-brand-500 bg-brand-50 px-2 py-1 rounded-full">
        উপন্যাস
      </span>
      <h1 className="text-3xl font-bold text-brand-900 mt-4 mb-2">{post.title}</h1>
      <p className="text-xs text-brand-900/50 mb-8">
        {new Date(post.createdAt).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <div className="prose-bangla whitespace-pre-wrap">{post.content}</div>
    </article>
  );
}
