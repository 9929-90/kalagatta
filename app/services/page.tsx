import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Anchoring Services in Udaipur",
  description:
    "Explore wedding anchoring, corporate events, government events, DJ parties, festive events, birthday, anniversary, and baby shower hosting by Anchor Himanshu Paliwal.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>Professional event anchoring services in Udaipur</h1>
        <p className="lede">
          Every event has its own audience, pace, and emotional center. These service pages explain how Himanshu prepares and hosts different event types without copying one generic script.
        </p>
      </section>
      <Section title="Choose your event type">
        <div className="service-grid">
          {services.map((service) => (
            <Link className="card service-text-card" href={`/${service.slug}`} key={service.slug}>
              <small>Service</small>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
