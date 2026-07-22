import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anchor Himanshu Paliwal",
    short_name: "Anchor Himanshu",
    description: "Professional anchor and event host in Udaipur.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF6F1",
    theme_color: "#FFF6F1",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
