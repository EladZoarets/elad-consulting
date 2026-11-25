import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://elad-consulting.com/sitemap.xml",
    host: "https://elad-consulting.com",
  };
}
