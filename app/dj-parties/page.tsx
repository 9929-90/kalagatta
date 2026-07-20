import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = services.find((item) => item.slug === "dj-parties")!;

export const metadata: Metadata = createMetadata({
  title: service.title,
  description: service.short,
  path: `/${service.slug}`,
  image: service.image,
});

export default function DjPartiesPage() {
  return <ServicePage service={service} />;
}
