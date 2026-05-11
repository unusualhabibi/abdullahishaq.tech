import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/about",
    "/blog",
    "/frameworks",
    "/labs",
    "/pricing",
    "/contact",
    "/book",
  ];

  const posts = await getPosts();

  return [
    ...staticRoutes.map((route) => ({
      url: `https://abdullahishaq.tech${route}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `https://abdullahishaq.tech/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    })),
  ];
}
