import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { brandAssets, serviceSlugs, type ServiceSlug } from "@/data/offices";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/lib/paths";

const slugToKey = {
  "freight-logistics": "freight",
  "project-logistics": "project",
  "warehouse-logistics": "warehouse",
  "shipping-agency": "shipping",
} as const;

const images: Record<ServiceSlug, string> = {
  "freight-logistics": brandAssets.planes,
  "project-logistics": brandAssets.heroShip,
  "warehouse-logistics": brandAssets.plane,
  "shipping-agency": brandAssets.heroShip,
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw) || !(slug in slugToKey)) return {};
  const dict = getDictionary(raw);
  const key = slugToKey[slug as ServiceSlug];
  const service = dict.services[key];
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: localePath(raw, `/services/${slug}`) },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw) || !(slug in slugToKey)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const key = slugToKey[slug as ServiceSlug];
  const service = dict.services[key];

  return (
    <>
      <PageHero
        title={service.title}
        body={service.hero}
        imageUrl={images[slug as ServiceSlug]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {service.sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-line bg-white p-6">
              <h2 className="font-display text-xl text-navy-900">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{section.body}</p>
            </article>
          ))}
        </div>

        {"servicesList" in service && service.servicesList ? (
          <div className="mt-12 rounded-2xl border border-line bg-sand-50 p-8">
            <h2 className="font-display text-2xl text-navy-900">{dict.footer.services}</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {service.servicesList.map((item) => (
                <li key={item} className="text-sm text-muted before:mr-2 before:text-cyan-500 before:content-['•']">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href={localePath(locale, "/contact#enquiry-form")}
            className="btn-primary rounded-full px-6 py-3 text-sm font-semibold"
          >
            {dict.nav.enquire}
          </Link>
          <Link
            href={localePath(locale, "/locations")}
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-navy-900 hover:border-cyan-400"
          >
            {dict.nav.locations}
          </Link>
        </div>
      </section>
    </>
  );
}
