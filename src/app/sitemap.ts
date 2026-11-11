import type { MetadataRoute } from "next";
import { serviceSlugs } from "@/data/offices";
import { locales } from "@/i18n/config";
import { localePath } from "@/lib/paths";

export const dynamic = "force-static";
export const revalidate = false;

const staticPaths = [
  "",
  "/about",
  "/contact",
  "/locations",
  "/news",
  "/legal/privacy-policy",
  "/legal/terms",
  "/legal/cookie-policy",
  "/legal/disclaimer",
  ...serviceSlugs.map((s) => `/services/${s}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.northgo.com";
  const lastModified = new Date("2026-11-11T00:00:00.000Z");

  return locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${base}${localePath(locale, path)}`,
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l === "zh-tw" ? "zh-TW" : l, `${base}${localePath(l, path)}`]),
        ),
      },
    })),
  );
}
