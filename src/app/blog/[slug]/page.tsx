import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/cms";
import { siteConfig } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteConfig.domain}/blog/${post.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: "Abdullah Ishaq" },
    description: post.description,
    mainEntityOfPage: `${siteConfig.domain}/blog/${post.slug}`,
  };

  return (
    <section className="section container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="eyebrow">{post.category}</p>
      <h1>{post.title}</h1>
      <p className="muted">
        {new Date(post.publishedAt).toLocaleDateString()} · {post.readTime}
      </p>
      <p className="sub">{post.description}</p>
      <article className="card" style={{ marginTop: "1.5rem" }}>
        {post.content.map((paragraph) => (
          <p key={paragraph} style={{ marginBottom: "1rem" }}>
            {paragraph}
          </p>
        ))}
      </article>
    </section>
  );
}
