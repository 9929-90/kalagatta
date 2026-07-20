import type { Metadata } from "next";
import { CalendarCheck, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Anchor Himanshu Paliwal",
  description: "Contact Anchor Himanshu Paliwal for wedding anchoring, corporate events, government programs, DJ parties, birthdays, anniversaries, and baby showers in Udaipur.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Check availability for your event date</h1>
        <p className="lede">Share event date, venue, guest count, preferred hosting language, and schedule details for a useful response.</p>
        <div className="hero-actions">
          <Button href="/#inquiry">
            <CalendarCheck className="btn-icon" />
            Open inquiry form
          </Button>
          <Button href={siteConfig.whatsapp} target="_blank" rel="noopener">WhatsApp</Button>
          <Button href={`tel:${siteConfig.phone}`} variant="secondary">Call {siteConfig.phoneDisplay}</Button>
        </div>
      </section>
      <Section title="Contact options" lead="Use the homepage inquiry form for structured booking details, or contact directly for quick date checks.">
        <div className="cta-band">
          <div>
            <small>Primary booking route</small>
            <h2>Complete inquiry details are collected on the homepage.</h2>
            <p>Keeping one form helps clients avoid duplicate submissions and keeps every service page focused on its event-specific information.</p>
          </div>
          <div className="cta-row">
            <Button href="/#inquiry">
              <CalendarCheck className="btn-icon" />
              Go to inquiry form
            </Button>
            <Button href={siteConfig.whatsapp} variant="secondary" target="_blank" rel="noopener">
              <MessageCircle className="btn-icon" />
              WhatsApp
            </Button>
          </div>
        </div>
        <div className="grid-3 contact-option-grid">
          <a className="card contact-option-card" href={`tel:${siteConfig.phone}`}>
            <Phone />
            <small>Call</small>
            <h3>{siteConfig.phoneDisplay}</h3>
          </a>
          <a className="card contact-option-card" href={`mailto:${siteConfig.email}`}>
            <Mail />
            <small>Email</small>
            <h3>{siteConfig.email}</h3>
          </a>
          <div className="card contact-option-card">
            <MapPin />
            <small>Location</small>
            <h3>{siteConfig.location}</h3>
          </div>
        </div>
      </Section>
    </>
  );
}
