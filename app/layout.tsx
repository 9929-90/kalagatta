import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { siteConfig } from "@/data/site";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/schema";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF6F1",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Best Anchor in Udaipur | Anchor Himanshu Paliwal",
    template: "%s | Anchor Himanshu Paliwal",
  },
  description: siteConfig.description,
  keywords: [
    "best anchor in Udaipur",
    "anchor in Udaipur",
    "wedding anchor Udaipur",
    "corporate event anchor Udaipur",
    "sangeet anchor Udaipur",
    "event host Udaipur",
    "Anchor Himanshu Paliwal",
  ],
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={openSans.variable}>
      <body>
        <ScrollProgress />
        <JsonLd data={[organizationSchema(), personSchema(), websiteSchema()]} />
        <Header />
        <main className="main-shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
