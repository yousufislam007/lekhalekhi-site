import { prisma } from "@/lib/prisma";

export async function generatePostMetadata(params, categoryPath) {
  const slug = decodeURIComponent(params.slug);

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) {
    return {
      title: "পোস্ট পাওয়া যায়নি | আমার লেখালেখি",
    };
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  const url = `${siteUrl}/${categoryPath}/${post.slug}`;

  const description =
    post.excerpt ||
    post.content.replace(/<[^>]*>/g, "").slice(0, 160);

  return {
    title: `${post.title} | আমার লেখালেখি`,
    description,

    openGraph: {
      title: post.title,
      description,
      url,
      siteName: "আমার লেখালেখি",
      locale: "bn_BD",
      type: "article",

      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.featuredImage
        ? [post.featuredImage]
        : [],
    },
  };
}