import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rahulnishad.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-11-18"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
