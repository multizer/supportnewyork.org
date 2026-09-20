import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://supportnewyork.org/",
      lastModified: new Date("2026-09-20"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
