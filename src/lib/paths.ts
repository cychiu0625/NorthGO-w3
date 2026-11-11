import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

const staticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

export function localePath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : path ? `/${path}` : "";
  // GitHub Pages has no locale rewrite proxy — always emit /{locale}/...
  if (staticExport) {
    return `/${locale}${clean}` || `/${locale}`;
  }
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}` || `/${locale}`;
}
