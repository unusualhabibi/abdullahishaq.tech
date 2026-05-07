import type { Metadata } from "next";
import Link from "next/link";
import { LeadCapture } from "@/components/lead-capture";
import { getPosts } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Blog",
  description: "Operator notes on AI systems, automation, and conversion design.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="section container">
      <p className="eyebrow">Blog</p>
      <h1>Operational notes from implementation work.</h1>
      <div className="grid" style={{ marginTop: "1.5rem" }}>
        {posts.map((post) => (
          <article className="card" key={post.slug}>
            <p className="eyebrow">{post.category}</p>
            <h2>{post.title}</h2>
            <p className="muted">{post.description}</p>
            <p className="muted">
              {new Date(post.publishedAt).toLocaleDateString()} · {post.readTime}
            </p>
            <Link className="cta" href={`/blog/${post.slug}`}>
              Read article
            </Link>
          </article>
        ))}
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <LeadCapture context="blog" />
      </div>
    </section>
  );
}
