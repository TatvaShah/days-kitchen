import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      lastModified: new Date("2026-10-06"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
