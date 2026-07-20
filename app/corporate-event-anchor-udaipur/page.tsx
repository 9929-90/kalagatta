import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = services.find((item) => item.slug === "corporate-event-anchor-udaipur")!;

export const metadata: Metadata = createMetadata({
  title: "Corporate Event Anchor in Udaipur",
  description: "Professional corporate event anchoring in Udaipur for conferences, award nights, brand launches, team meets, and formal programs.",
  path: "/corporate-event-anchor-udaipur",
  image: service.image,
});

export default function Page() {
  return <ServicePage service={service} />;
}
