import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { portfolioImages } from "@/data/portfolio";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Portfolio and Gallery",
  description: "View event hosting and anchoring images from Anchor Himanshu Paliwal's portfolio across weddings, corporate events, and celebrations.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Visual Safar: event anchoring gallery</h1>
        <p className="lede">Selected photographs migrated from the previous site and organized with descriptive alt text for image SEO and accessibility.</p>
      </section>
      <Section title="Gallery highlights">
        <div className="gallery-grid">
          {portfolioImages.map((image) => (
            <div className="gallery-item" key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 680px) 50vw, 25vw" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
        <div className="cta-row">
          <Button href="/#inquiry">Inquire for your date</Button>
        </div>
      </Section>
    </>
  );
}
