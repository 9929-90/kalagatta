import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions",
  description: "Answers to common questions about booking an anchor in Udaipur for weddings, corporate events, government events, DJ parties, birthdays, anniversaries, and baby showers.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <section className="page-hero">
        <p className="eyebrow">FAQ</p>
        <h1>Frequently asked questions about event anchoring</h1>
        <p className="lede">Practical answers for couples, families, planners, corporate teams, government programs, and celebration hosts.</p>
      </section>
      <Section title="Booking questions">
        <div className="grid-2">
          {faqs.map((faq) => (
            <details className="faq-card" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
