import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:8090";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`,
    lastModified: new Date(),
  }));
}
