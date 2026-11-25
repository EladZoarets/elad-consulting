import { MetadataRoute } from "next";

const site = "https://elad-consulting.com";

const languages = {
  he: `${site}/he`,
  en: `${site}/en`,
  "x-default": `${site}/he`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-25");
  return [
    {
      url: `${site}/he`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${site}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
