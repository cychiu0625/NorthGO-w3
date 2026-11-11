import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/types";
import en from "./dictionaries/en";
import zhTw from "./dictionaries/zh-tw";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  "zh-tw": zhTw,
  ja: en,
  vi: en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export function isPartialLocale(locale: Locale): boolean {
  return locale === "ja" || locale === "vi";
}
