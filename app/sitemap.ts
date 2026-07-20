import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/blog";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/testimonials",
    "/blog",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const serviceRoutes = services.map((service) => `/${service.slug}`);
  const blogRoutes = getAllPosts().map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog") ? 0.7 : 0.8,
  }));
}
