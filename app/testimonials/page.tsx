import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { TestimonialsSlider } from "@/components/sections/TestimonialsSlider";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Testimonials",
  description: "Read client testimonials for Anchor Himanshu Paliwal, professional anchor and event host in Udaipur.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Testimonials", path: "/testimonials" }])} />
      <section className="page-hero">
        <p className="eyebrow">Client voices</p>
        <h1>Client reviews for Anchor Himanshu Paliwal</h1>
        <p className="lede">Google-style client reviews with 4.5 and 5 star ratings from weddings, corporate events, birthdays, baby showers, government events, and family celebrations.</p>
      </section>
      <Section title="What clients said">
        <TestimonialsSlider items={testimonials} />
      </Section>
    </>
  );
}
