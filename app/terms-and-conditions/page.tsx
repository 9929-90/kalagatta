import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions for using the Anchor Himanshu Paliwal website and inquiry form.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <section className="page-hero">
      <p className="eyebrow">Terms</p>
      <h1>Terms and Conditions</h1>
      <div className="article-body">
        <p>Last updated: July 13, 2026</p>
        <h2>Website use</h2>
        <p>This website provides information about anchoring and event hosting services. Content is for general inquiry and planning purposes only.</p>
        <h2>Bookings</h2>
        <p>Submitting an inquiry does not confirm a booking. Dates, fees, travel, scope, timing, and event requirements must be confirmed directly with {siteConfig.name}.</p>
        <h2>Content accuracy</h2>
        <p>The website preserves verified details from supplied materials and uses placeholders where information still needs confirmation. Please report corrections to {siteConfig.email}.</p>
        <h2>External links</h2>
        <p>External social, WhatsApp, and video links are provided for convenience. Their policies and availability are managed by their respective platforms.</p>
      </div>
    </section>
  );
}
