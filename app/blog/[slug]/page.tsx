import Link from "next/link";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { BlogMarkdown } from "@/components/sections/BlogMarkdown";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

function getArticleSeoContext(category: string) {
  const normalized = category.toLowerCase();

  if (normalized.includes("corporate")) {
    return {
      audience: "corporate teams, leadership guests, speakers, sponsors, and formal invitees",
      eventTypes: "conferences, award nights, annual meets, product launches, and brand-led programs",
      tone: "polished, time-conscious, brand-safe, and clear",
    };
  }

  if (normalized.includes("college") || normalized.includes("youth")) {
    return {
      audience: "students, faculty, performers, sponsors, and invited guests",
      eventTypes: "freshers, annual functions, cultural festivals, youth shows, and college competitions",
      tone: "energetic, clean, interactive, and controlled",
    };
  }

  if (normalized.includes("sangeet") || normalized.includes("engagement")) {
    return {
      audience: "families, friends, performers, choreographers, and the couple",
      eventTypes: "sangeet nights, engagement ceremonies, ring ceremonies, family games, and performance evenings",
      tone: "warm, personal, lively, and family-friendly",
    };
  }

  return {
    audience: "families, planners, guests, artists, photographers, and venue teams",
    eventTypes: "weddings, destination celebrations, receptions, private parties, and premium social events",
    tone: "warm, bilingual, organized, emotional, and audience-friendly",
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.featuredImage,
    type: "article",
    keywords: [
      post.title,
      post.category,
      "best anchor in Udaipur",
      "anchor in Udaipur",
      "event host Udaipur",
      "wedding anchor Udaipur",
      "Anchor Himanshu Paliwal",
    ],
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const seoContext = getArticleSeoContext(post.category);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: post.author },
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    image: absoluteUrl(post.featuredImage),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          faqSchema(post.faqs),
        ]}
      />
      <article>
        <section className="page-hero blog-article-hero">
          <div className="blog-article-hero-copy article-hero-text-only">
            <p className="eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            <p className="lede">{post.description}</p>
            <p className="article-meta">
              By {post.author} | Published {post.publishDate} | Updated {post.updatedDate}
            </p>
          </div>
        </section>
        <section className="section article-layout">
          <aside className="toc" aria-label="Table of contents">
            <strong>Table of contents</strong>
            {post.headings.map((heading) => (
              <a href={`#${heading.id}`} key={heading.id}>
                {heading.text}
              </a>
            ))}
          </aside>
          <div className="article-body">
            <BlogMarkdown content={post.content} />

            <section className="article-seo-panel" aria-labelledby="local-planning-context">
              <h2 id="local-planning-context">How this applies to Udaipur event planning</h2>
              <p>
                For {seoContext.eventTypes} in Udaipur and Rajasthan, anchoring works best when the host understands the venue flow, family expectations,
                audience mix, and the real pace of Indian events. A professional anchor should not only announce the next item; the anchor should protect
                timing, explain context, keep guests attentive, and make transitions feel natural.
              </p>
              <p>
                This topic matters most when the audience includes {seoContext.audience}. The right stage language keeps the program {seoContext.tone}
                without making the event feel scripted or heavy.
              </p>
              <h3>Details worth sharing before booking</h3>
              <ul>
                <li>Event date, city, venue name, expected guest count, and stage timing.</li>
                <li>Preferred language mix: Hindi, English, Hinglish, Marwari, or a family-specific tone.</li>
                <li>Names of families, speakers, performers, VIP guests, brands, sponsors, or award categories.</li>
                <li>Any emotional moments, surprise entries, games, rituals, performances, or schedule risks.</li>
              </ul>
              <h3>What a prepared anchor improves</h3>
              <p>
                A prepared anchor reduces confusion between segments, supports planners and AV teams, introduces people respectfully, and keeps guests
                connected even when there are delays. That is why clients searching for an anchor in Udaipur should look for communication style,
                preparation quality, crowd control, and comfort with mixed-age audiences.
              </p>
            </section>

            <div className="card article-cta-card">
              <h2>Plan your event anchoring</h2>
              <p>Share your event date, venue, audience type, and preferred hosting language to discuss availability.</p>
              <div className="cta-row">
                <Button href="/#inquiry">
                  <CalendarCheck className="btn-icon" />
                  Open inquiry form
                </Button>
                <Button href={siteConfig.whatsapp} variant="secondary" target="_blank" rel="noopener">
                  <MessageCircle className="btn-icon" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <h2>Frequently asked questions</h2>
            {post.faqs.map((faq) => (
              <details className="faq-card" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
      <Section eyebrow="Related posts" title="Read next">
        <div className="blog-grid related-post-grid">
          {related.map((item) => (
            <Link className="blog-card related-post-card" href={`/blog/${item.slug}`} key={item.slug}>
              <div>
                <small>{item.category}</small>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
