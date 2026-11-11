import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary, isPartialLocale } from "@/i18n/get-dictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div lang={locale === "zh-tw" ? "zh-Hant-TW" : locale} className="flex min-h-full flex-1 flex-col">
      <OrganizationJsonLd />
      <Header locale={locale} dict={dict} />
      {isPartialLocale(locale) ? (
        <div className="relative z-30 bg-cyan-400 px-5 py-2 text-center text-xs font-medium text-navy-950">
          {dict.common.comingSoonLocale}
        </div>
      ) : null}
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
