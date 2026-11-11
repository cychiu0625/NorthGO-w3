export const locales = ["en", "zh-tw", "ja", "vi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeLabels: Record<Locale, string> = {
  en: "English",
  "zh-tw": "繁體中文",
  ja: "日本語",
  vi: "Tiếng Việt",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
