import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fayez-mrouj-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    "home",
    "about",
    "journey",
    "philosophy",
    "expertise",
    "innovation",
    "achievements",
    "certifications",
    "gallery",
    "resources",
    "blog",
    "contact",
  ];
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...sections.map((s) => ({
      url: `${SITE_URL}/#${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
