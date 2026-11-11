import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brandAssets } from "@/data/offices";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/lib/paths";

const services = [
  { key: "freight" as const, slug: "freight-logistics", icon: brandAssets.icons.freight },
  { key: "project" as const, slug: "project-logistics", icon: brandAssets.icons.project },
  { key: "warehouse" as const, slug: "warehouse-logistics", icon: brandAssets.icons.warehouse },
  { key: "shipping" as const, slug: "shipping-agency", icon: brandAssets.icons.shipping },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return {
    title: dict.meta.defaultTitle,
    description: dict.meta.defaultDescription,
    alternates: {
      canonical: localePath(raw, ""),
      languages: {
        en: "/",
        "zh-TW": "/zh-tw",
        ja: "/ja",
        vi: "/vi",
        "x-default": "/",
      },
    },
    openGraph: {
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
      url: localePath(raw, ""),
    },
  };
}

export default async function HomePage({
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
      <section className="relative isolate min-h-[92vh] overflow-hidden bg-navy-950 text-white">
        <Image
          src={brandAssets.heroShip}
          alt="Cargo ship loaded with containers at sea"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-wash absolute inset-0" aria-hidden />
        <div className="wave-mask absolute inset-0 opacity-70" aria-hidden />

        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 lg:px-8">
          <p className="animate-rise mb-4 font-display text-sm font-semibold tracking-[0.22em] text-cyan-300 uppercase">
            Northgo
          </p>
          <h1 className="animate-rise font-display max-w-3xl text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
            {dict.home.heroTitle}{" "}
            <span className="text-cyan-400">{dict.home.heroHighlight}</span>
          </h1>
          <p className="animate-rise-delay mt-6 max-w-xl text-base text-white/80 md:text-lg">
            {dict.home.heroBody}
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href={localePath(locale, "/contact#enquiry-form")}
              className="btn-primary rounded-full px-6 py-3 text-sm font-semibold"
            >
              {dict.nav.enquire}
            </Link>
            <Link
              href={localePath(locale, "/about")}
              className="btn-ghost rounded-full px-6 py-3 text-sm font-semibold"
            >
              {dict.nav.about}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sand-50 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan-500 uppercase">
              {dict.home.purposeEyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl text-navy-900 md:text-4xl">
              {dict.home.purposeTitle}
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted">{dict.home.purposeBody}</p>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-navy-900 md:text-4xl">
              {dict.home.servicesTitle}
            </h2>
            <p className="mt-4 text-muted">{dict.home.servicesBody}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={localePath(locale, `/services/${s.slug}`)}
                className="service-card group rounded-2xl border border-line bg-white p-6"
              >
                <div className="mb-5 h-12 w-12">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.icon} alt="" className="h-12 w-12 object-contain" />
                </div>
                <h3 className="font-display text-xl text-navy-900">
                  {dict.services[s.key].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {dict.services[s.key].short}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-cyan-500 group-hover:text-cyan-400">
                  {dict.home.learnMore}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="why-northgo" className="bg-navy-900 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl">{dict.home.whyTitle}</h2>
            <p className="mt-4 text-white/75">{dict.home.whyBody}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dict.home.whyPoints.map((point) => (
              <div key={point.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-xl text-cyan-300">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-navy-900">{dict.home.trustTitle}</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {dict.home.trustStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl text-cyan-500">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <h3 className="text-sm font-semibold tracking-[0.18em] text-navy-700 uppercase">
              {dict.home.industriesTitle}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {dict.home.industries.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-sand-50 px-4 py-2 text-sm text-navy-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 px-5 py-20 text-white lg:px-8">
        <div className="wave-mask absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="font-display max-w-2xl text-3xl md:text-4xl">{dict.home.ctaTitle}</h2>
          <p className="mt-4 max-w-xl text-white/75">{dict.home.ctaBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localePath(locale, "/contact#enquiry-form")}
              className="btn-primary rounded-full px-6 py-3 text-sm font-semibold"
            >
              {dict.nav.enquire}
            </Link>
            <Link
              href={localePath(locale, "/locations")}
              className="btn-ghost rounded-full px-6 py-3 text-sm font-semibold"
            >
              {dict.home.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
