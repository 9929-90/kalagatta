import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { getAllPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: "SEO-friendly event anchoring guides for Udaipur weddings, corporate events, government events, sangeet nights, DJ parties, birthdays, anniversaries, and baby showers.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Blog</p>
        <h1>Event anchoring guides for Udaipur clients</h1>
        <p className="lede">Helpful planning articles for couples, families, planners, companies, government programs, and celebration hosts.</p>
      </section>
      <Section title="Latest articles">
        <div className="blog-grid">
          {posts.map((post) => (
            <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
              <figure>
                <Image src={post.featuredImage} alt={post.title} fill sizes="(max-width: 1080px) 50vw, 33vw" style={{ objectFit: "cover" }} />
              </figure>
              <div>
                <small>{post.category}</small>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
