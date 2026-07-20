import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    alternateName: siteConfig.brand,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.serviceArea,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.socials.instagram, siteConfig.socials.youtube],
    serviceType: [
      "Wedding anchoring in Udaipur",
      "Corporate event anchoring in Udaipur",
      "Government event anchoring",
      "DJ party hosting",
      "Social and festive event hosting",
      "Birthday anchoring",
      "Anniversary anchoring",
      "Baby shower anchoring",
    ],
    slogan: "Best anchor in Udaipur for weddings and premium events",
    knowsAbout: [
      "Wedding anchoring",
      "Corporate event hosting",
      "Government event hosting",
      "DJ party hosting",
      "Sangeet hosting",
      "Birthday and anniversary hosting",
      "Baby shower anchoring",
      "Bilingual Hindi English anchoring",
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Himanshu Paliwal",
    jobTitle: "Professional Anchor and Event Host",
    url: siteConfig.domain,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: absoluteUrl("/images/hero.png"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.socials.instagram, siteConfig.socials.youtube],
    knowsAbout: [
      "Wedding anchoring in Udaipur",
      "Corporate event anchoring",
      "Government event anchoring",
      "Sangeet hosting",
      "DJ party hosting",
      "Social and festive event hosting",
      "Birthday party anchoring",
      "Baby shower hosting",
      "Hindi English event hosting",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.domain}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Person",
      name: "Himanshu Paliwal",
    },
    areaServed: siteConfig.serviceArea,
    url: absoluteUrl(path),
  };
}
