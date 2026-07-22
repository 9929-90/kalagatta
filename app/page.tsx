import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { TestimonialsSlider } from "@/components/sections/TestimonialsSlider";
import { ContactForm } from "@/components/sections/ContactForm";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Section } from "@/components/ui/Section";
import { eventCategories, services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { portfolioImages } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { getAllPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Best Anchor in Udaipur for Weddings & Events",
  description:
    "Looking for the best anchor in Udaipur? Book Anchor Himanshu Paliwal for weddings, corporate events, government events, DJ parties, birthdays, anniversaries, and baby showers.",
  path: "/",
  keywords: [
    "best anchor in Udaipur",
    "anchor in Udaipur",
    "wedding anchor in Udaipur",
    "corporate event anchor Udaipur",
    "government event anchor Udaipur",
    "DJ party anchor Udaipur",
    "sangeet anchor Udaipur",
    "birthday anchor Udaipur",
    "baby shower anchor Udaipur",
    "event host Udaipur",
  ],
});

const whyChoose = [
  "Bilingual Hindi-English stage presence for mixed Indian audiences.",
  "Prepared event scripts, guest introductions, games, and transition cues.",
  "Experience across weddings, corporate events, government programs, DJ parties, birthdays, anniversaries, and baby showers.",
  "Local Udaipur knowledge with presence across Rajasthan and nearby cities.",
];

const process = [
  { title: "Brief", text: "Share date, venue, guest profile, event type, language preference, and must-include names." },
  { title: "Script", text: "The event flow is shaped into a practical run-of-show with announcements, transitions, and engagement ideas." },
  { title: "Host", text: "On the day, the stage stays organized, guests stay included, and timing changes are handled calmly." },
];

const localSeoHighlights = [
  {
    title: "Clear Hindi-English hosting",
    text: "Guests from different cities and age groups can follow the event easily, whether the moment needs warmth, humor, or a formal tone.",
  },
  {
    title: "Prepared event flow",
    text: "Entries, performances, games, speaker introductions, family names, and important announcements are planned before the event day.",
  },
  {
    title: "Udaipur event experience",
    text: "Local wedding venues, destination guests, planner coordination, and Rajasthan-style family celebrations are handled with practical stage sense.",
  },
];

const homepageServices = services
  .filter((service) => service.slug !== "anniversary-anchor" && service.slug !== "baby-shower-anchor")
  .map((service) =>
    service.slug === "birthday-anchor"
      ? {
          ...service,
          title: "Birthday, Anniversary & Baby Shower",
          short: "Warm family-function hosting for birthdays, anniversaries, and baby showers with games, blessings, entries, and celebration flow.",
          image: "/newimages/service-birthday-anchor.jpeg",
        }
      : service,
  );

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <JsonLd data={faqSchema(faqs.slice(0, 6))} />
      <section className="hero">
        <Image
          className="hero-bg"
          src="/images/hero.png"
          alt="Anchor Himanshu Paliwal hosting premium wedding events in Udaipur"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-scrim" />
        <MotionReveal className="hero-copy">
          <p className="eyebrow">Safar with Himanshu</p>
          <h1>Best Anchor in Udaipur for Weddings, Corporate and premium events</h1>
          <p className="lede">
            Anchor Himanshu Paliwal brings clear speech, warm Hindi-English hosting, crowd engagement, and calm stage control to weddings,
            corporate events, government programs, DJ parties, sangeet nights, birthdays, anniversaries, and baby showers.
          </p>
          <div className="hero-actions">
            <Button href="/#inquiry">
              <CalendarCheck className="btn-icon" />
              Plan your event
            </Button>
            <Button href={siteConfig.whatsapp} variant="secondary" target="_blank" rel="noopener" aria-label="Message on WhatsApp">
              <MessageCircle className="btn-icon" />
            </Button>
            <Button href={`tel:${siteConfig.phone}`} variant="ghost" aria-label={`Call ${siteConfig.phoneDisplay}`}>
              <Phone className="btn-icon" />
            </Button>
          </div>
          <div className="stats-grid" aria-label="Event experience statistics">
            {siteConfig.stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </section>

      <Section eyebrow="Event categories" title="Hosting for celebrations where timing, warmth, and crowd energy matter">
        <div className="grid-3">
          {eventCategories.map((category) => (
            <MotionReveal className="card" key={category}>
              <small>Event</small>
              <h3>{category}</h3>
            </MotionReveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="About"
        title="A Udaipur anchor who keeps the event easy to follow"
        lead="For guests, a great event feels effortless. Behind the stage, that needs preparation, timing, respectful introductions, and the right words at the right moment."
      >
        <div className="about-content-split">
          <MotionReveal className="card about-card about-card-with-image">
            <div className="about-card-copy">
              <h3>Why professional anchoring changes the event</h3>
              <p>
                A professional anchor does more than announce names. The host gives guests context, protects the schedule, introduces emotional moments,
                fills delays gracefully, and keeps everyone connected to what is happening on stage.
              </p>
              <p>
                Himanshu Paliwal has hosted weddings, corporate programs, youth events, sangeet nights, and private celebrations across Udaipur and nearby
                cities. His style is simple: understand the audience, prepare the flow, and make the stage feel confident without making it feel loud.
              </p>
              <p>
                If you are comparing the best anchor in Udaipur for your event, look for more than energy. Look for clean communication, bilingual comfort,
                polite audience handling, timing sense, and the ability to coordinate smoothly with planners, photographers, artists, and family members.
              </p>
              <p>
                That is the focus here: hosting that keeps guests involved, families relaxed, and the event moving from one important moment to the next.
              </p>
              <div className="cta-row">
                <Button href="/about" variant="secondary">About Himanshu</Button>
                <Button href="/portfolio" variant="ghost">View portfolio</Button>
              </div>
            </div>
            <div className="about-card-portrait">
              <Image
                src="/newimages/about.jpeg"
                alt="Anchor Himanshu Paliwal during a hosted celebration in Udaipur"
                fill
                sizes="(max-width: 900px) 100vw, 30vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </MotionReveal>
        </div>
      </Section>

      <Section eyebrow="Why choose Himanshu" title="Prepared, responsive, and comfortable with mixed audiences">
        <div className="grid-2">
          {whyChoose.map((item, index) => (
            <MotionReveal className="card" key={item} delay={index * 0.04}>
              <small>0{index + 1}</small>
              <p>{item}</p>
            </MotionReveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Best anchor in Udaipur"
        title="What clients usually mean when they search for the best anchor"
        lead="Most people are not only looking for a loud stage performer. They want someone who can keep the event smooth, guests involved, and important moments respected."
      >
        <div className="grid-3">
          {localSeoHighlights.map((item) => (
            <MotionReveal className="card" key={item.title}>
              <small>Booking factor</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </MotionReveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Services" title="Dedicated anchoring pages for every major event type" lead="Each service has a unique plan, tone, and audience strategy rather than a copied paragraph with different keywords.">
        <div className="service-grid">
          {homepageServices.map((service) => (
            <MotionReveal className="blog-card" key={service.slug}>
              <figure>
                <Image
                  src={service.image}
                  alt={`${service.title} by Anchor Himanshu Paliwal`}
                  fill
                  sizes="(max-width: 1080px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: service.imagePosition ?? "center" }}
                />
              </figure>
              <div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <Link href={`/${service.slug}`}>Explore service</Link>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Portfolio" title="Visual Safar highlights" lead="Fresh stage moments from weddings, celebrations, and live events hosted by Anchor Himanshu Paliwal.">
        <div className="gallery-grid">
          {portfolioImages.slice(0, 8).map((image) => (
            <Link className="gallery-item" href="/portfolio" key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 680px) 50vw, 25vw" style={{ objectFit: "cover" }} />
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Client voices" title="Testimonials from the previous website">
        <TestimonialsSlider items={testimonials} />
      </Section>

      <Section eyebrow="Process" title="How custom event hosting is prepared">
        <div className="grid-3">
          {process.map((step, index) => (
            <MotionReveal className="process-step" key={step.title}>
              <small>Step 0{index + 1}</small>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </MotionReveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Udaipur local service"
        title="Built for Udaipur weddings, public programs, and Rajasthan audiences"
        lead={`Himanshu is based in ${siteConfig.location}. The existing site lists presence in ${siteConfig.serviceArea.join(", ")}. Local service content is written naturally so clients can understand availability without keyword stuffing.`}
      >
        <div className="grid-3">
          {siteConfig.serviceArea.map((city) => (
            <div className="card" key={city}>
              <small>Service area</small>
              <h3>{city}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Latest blog posts" title="Helpful guides for choosing and planning anchoring">
        <div className="blog-grid">
          {posts.map((post) => (
            <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
              <figure>
                <Image src={post.featuredImage} alt={post.title} fill sizes="(max-width: 1080px) 50vw, 33vw" style={{ objectFit: "cover" }} />
              </figure>
              <div>
                <small>{post.category}</small>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="inquiry" eyebrow="FAQ & Inquiry" title="Questions answered, event details captured" lead="A compact booking section for quick decisions, date checks, and planning clarity.">
        <div className="faq-contact-grid">
          <div className="faq-stack">
            {faqs.slice(0, 6).map((faq) => (
              <details className="faq-card" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
            <div className="direct-contact-card">
              <a href={`tel:${siteConfig.phone}`}><Phone /> {siteConfig.phoneDisplay}</a>
              <a href={`mailto:${siteConfig.email}`}><Mail /> {siteConfig.email}</a>
              <span><MapPin /> {siteConfig.location}</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
