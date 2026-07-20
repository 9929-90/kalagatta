import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = services.find((item) => item.slug === "wedding-anchor-udaipur")!;

export const metadata: Metadata = createMetadata({
  title: "Wedding Anchor in Udaipur",
  description: "Book Anchor Himanshu Paliwal for wedding anchoring in Udaipur, including receptions, entries, games, family moments, and bilingual hosting.",
  path: "/wedding-anchor-udaipur",
  image: service.image,
});

export default function Page() {
  return <ServicePage service={service} />;
}
