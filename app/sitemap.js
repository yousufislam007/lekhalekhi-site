import { prisma } from "@/lib/prisma";

export default async function sitemap() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    select: {
      slug: true,
      category: true,
      updatedAt: true,
    },
  });

  const routes = [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/chuto-golpo`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/kobita`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/uponnash`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/videos`,
      lastModified: new Date(),
    },
  ];

  const postRoutes = posts.map((post) => ({
    url: `${siteUrl}/${
      post.category === "golpo"
        ? "chuto-golpo"
        : post.category
    }/${post.slug}`,
    lastModified: post.updatedAt,
  }));

  return [...routes, ...postRoutes];
}