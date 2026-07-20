import Link from "next/link";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import type { Service } from "@/data/services";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

type ServicePageProps = {
  service: Service;
};

export function ServicePage({ service }: ServicePageProps) {
  const path = `/${service.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path },
          ]),
          serviceSchema(service.title, service.intro, path),
        ]}
      />
      <section className="page-hero">
        <p className="eyebrow">Service in Udaipur</p>
        <h1>{service.title}</h1>
        <p className="lede">{service.intro}</p>
        <div className="hero-actions">
          <Button href="/#inquiry">Check availability</Button>
          <Button href={siteConfig.whatsapp} variant="secondary" target="_blank" rel="noopener">
            WhatsApp details
          </Button>
        </div>
      </section>

      <Section eyebrow="What is included" title={`How ${service.title.toLowerCase()} is handled`}>
        <div className="grid-3">
          {service.points.map((point, index) => (
            <div className="card" key={point}>
              <small>0{index + 1}</small>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Preparation" title="A hosting plan shaped around your audience">
        <div className="grid-3">
          {service.process.map((step, index) => (
            <div className="process-step" key={step}>
              <small>Step 0{index + 1}</small>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Local SEO"
        title="Why Udaipur context matters"
        lead="Event anchoring in Udaipur often involves wedding venues, corporate halls, public programs, family-led ceremonies, DJ setups, and tight coordination with planners, photographers, sound teams, and artists."
      >
        <div className="grid-2">
          <div className="card">
            <h3>Bilingual connection</h3>
            <p>
              Hindi-English hosting helps guests from different age groups and cities follow the event flow. It also keeps formal introductions,
              playful games, and emotional moments accessible to everyone.
            </p>
          </div>
          <div className="card">
            <h3>Better event flow</h3>
            <p>
              A prepared anchor can bridge delays, announce transitions, introduce family members or speakers, and keep the energy right without
              overwhelming the program.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Related services" title="Explore more anchoring options">
        <div className="grid-3">
          <Link className="card" href="/wedding-anchor-udaipur">
            <h3>Wedding Anchoring</h3>
            <p>Reception, entries, games, family moments, and ceremonies.</p>
          </Link>
          <Link className="card" href="/corporate-event-anchor-udaipur">
            <h3>Corporate Events</h3>
            <p>Conferences, award nights, launches, and brand programs.</p>
          </Link>
          <Link className="card" href="/government-events">
            <h3>Government Events</h3>
            <p>Protocol-led public programs, ceremonies, and official gatherings.</p>
          </Link>
        </div>
      </Section>

      <Section eyebrow="Inquiry" title={`Book ${service.title}`}>
        <div className="cta-band">
          <div>
            <small>Fast booking note</small>
            <h3>Share your event date, venue, guest count, preferred language, schedule, important names, and family or brand instructions.</h3>
            <p>The complete inquiry form is kept on the homepage so every service page stays focused, compact, and easy to scan.</p>
          </div>
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
      </Section>
    </>
  );
}
