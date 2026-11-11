import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { brandAssets } from "@/data/offices";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/lib/paths";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return {
    title: dict.news.title,
    description: dict.news.intro,
    alternates: { canonical: localePath(raw, "/news") },
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.news.title} body={dict.news.intro} imageUrl={brandAssets.plane} />
      <section className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
        <p className="text-muted">{dict.news.empty}</p>
        <Link
          href={localePath(locale, "/contact")}
          className="btn-primary mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold"
        >
          {dict.news.cta}
        </Link>
      </section>
    </>
  );
}
