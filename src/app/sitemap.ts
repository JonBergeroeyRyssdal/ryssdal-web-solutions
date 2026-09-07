import type { MetadataRoute } from "next";
import { languages } from "@/i18n/config";
import { siteUrl, languageAlternates } from "@/i18n/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.map((language) => ({
    url: new URL(`/${language}`, siteUrl).href,
    alternates: { languages: languageAlternates },
  }));
}
