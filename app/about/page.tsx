import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Himanshu Paliwal",
  description: "Learn about Anchor Himanshu Paliwal, Udaipur-based professional event host and master of ceremonies behind Safar with Himanshu.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">About Himanshu Paliwal</p>
        <h1>The journey behind Safar with Himanshu</h1>
        <p className="lede">
          Himanshu Paliwal is a professional anchor based in the City of Lakes, Udaipur. The existing website presents him as a versatile host active since 2019, with more than 500 events hosted across weddings, corporate events, government programs, DJ parties, birthdays, anniversaries, baby showers, and festive celebrations.
        </p>
      </section>
      <Section title="A stage style built on clarity and connection">
        <div className="grid-2">
          <div className="card">
            <h2>What clients should expect</h2>
            <p>
              A good anchor understands the purpose of every moment. At a wedding, the host protects emotion and family warmth. At a corporate or government event, the host protects the agenda, protocol, and speaker flow. At a DJ party or family celebration, the host keeps energy high while holding the room together.
            </p>
            <p>
              Himanshu&apos;s hosting approach centers on preparation, bilingual comfort, audience reading, and responsive stage control. The website avoids unverified claims and keeps placeholders where business details still need confirmation.
            </p>
          </div>
          <div className="card">
            <h2>Why Udaipur clients remember the hosting</h2>
            <p>
              Guests usually remember how the event felt: whether entries were clear, games were fun, family names were handled respectfully, and delays were managed without awkward silence.
            </p>
            <p>
              That is where a prepared anchor matters. Himanshu focuses on clean communication, warm interaction, and a stage flow that supports the occasion instead of overpowering it.
            </p>
          </div>
        </div>
      </Section>
      <Section eyebrow="Presence" title="Cities referenced in the existing portfolio">
        <div className="grid-3">
          {siteConfig.serviceArea.map((city) => (
            <div className="card" key={city}>
              <h3>{city}</h3>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
