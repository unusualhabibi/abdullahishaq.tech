import { createClient } from "@sanity/client";
import { localPosts, type Post } from "@/content/posts";
import { localFrameworks, type Framework } from "@/content/frameworks";

const hasSanity =
  Boolean(process.env.SANITY_PROJECT_ID) &&
  Boolean(process.env.SANITY_DATASET) &&
  Boolean(process.env.SANITY_API_VERSION);

const client = hasSanity
  ? createClient({
      projectId: process.env.SANITY_PROJECT_ID!,
      dataset: process.env.SANITY_DATASET!,
      apiVersion: process.env.SANITY_API_VERSION!,
      useCdn: true,
    })
  : null;

export async function getPosts(): Promise<Post[]> {
  if (!client) return localPosts;

  try {
    const posts = await client.fetch<Post[]>(`*[_type == "post"] | order(publishedAt desc){
      "slug": slug.current,
      title,
      description,
      publishedAt,
      readTime,
      category,
      content
    }`);
    return posts.length ? posts : localPosts;
  } catch {
    return localPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getFrameworks(): Promise<Framework[]> {
  if (!client) return localFrameworks;

  try {
    const frameworks = await client.fetch<Framework[]>(`*[_type == "framework"] | order(_createdAt desc){
      "slug": slug.current,
      title,
      "summary": coalesce(summary, ""),
      status
    }`);
    return frameworks.length ? frameworks : localFrameworks;
  } catch {
    return localFrameworks;
  }
}
