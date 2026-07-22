import Link from "next/link";
import { Mail, Mic2, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { InstagramBrandIcon, WhatsAppBrandIcon, YouTubeBrandIcon } from "@/components/ui/BrandSocialIcons";

const goodLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
];

const serviceLinks = [
  { href: "/wedding-anchor-udaipur", label: "Wedding Anchor" },
  { href: "/corporate-event-anchor-udaipur", label: "Corporate Events" },
  { href: "/government-events", label: "Government Events" },
  { href: "/birthday-anchor", label: "Birthday Anchor" },
  { href: "/services", label: "All Services" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-and-conditions", label: "Terms" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo" aria-label={siteConfig.name}>
        <Mic2 />
      </div>
      <div className="footer-grid">
        <div className="footer-column">
          <h3>The Stage</h3>
          {goodLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <h3>The Services</h3>
          {serviceLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <h3>The Details</h3>
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-column footer-social-column">
          <h3>The Socials</h3>
          <div className="footer-socials" aria-label="Social and contact links">
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener" aria-label="Instagram">
              <InstagramBrandIcon />
            </a>
            <a href={siteConfig.socials.youtube} target="_blank" rel="noopener" aria-label="YouTube">
              <YouTubeBrandIcon />
            </a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp">
              <WhatsAppBrandIcon />
            </a>
            <a href={`tel:${siteConfig.phone}`} aria-label="Call">
              <Phone />
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-wordmark-stack" aria-label="Anchor Himanshu">
        <p className="footer-wordmark footer-wordmark-anchor">Anchor</p>
        <p className="footer-wordmark">Himanshu</p>
      </div>
      <div className="footer-bottom">
        <span>{siteConfig.location}</span>
        <span>Copyright 2026 {siteConfig.name}</span>
      </div>
    </footer>
  );
}
