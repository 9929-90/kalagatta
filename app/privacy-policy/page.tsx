import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Anchor Himanshu Paliwal website inquiries and contact forms.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="page-hero">
      <p className="eyebrow">Privacy Policy</p>
      <h1>Privacy Policy</h1>
      <div className="article-body">
        <p>Last updated: July 13, 2026</p>
        <h2>Information collected</h2>
        <p>This website may collect your name, phone number, email address, event date, venue, guest count, budget range, and message when you submit an inquiry form or contact directly.</p>
        <h2>How information is used</h2>
        <p>Information is used only to respond to event inquiries, prepare anchoring discussions, and coordinate bookings. Do not submit sensitive personal information through the form.</p>
        <h2>Third-party services</h2>
        <p>The inquiry form can be connected to a configurable backend endpoint or email service. Any added provider should be reviewed for privacy and spam protection before production use.</p>
        <h2>Contact</h2>
        <p>For privacy questions, contact {siteConfig.email}.</p>
      </div>
    </section>
  );
}
