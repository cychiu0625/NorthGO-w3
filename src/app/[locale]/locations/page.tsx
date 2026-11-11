import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { brandAssets, offices } from "@/data/offices";
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
    title: dict.locations.title,
    description: dict.locations.intro,
    alternates: { canonical: localePath(raw, "/locations") },
  };
}

export default async function LocationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const zh = locale === "zh-tw";

  return (
    <>
      <PageHero
        title={dict.locations.title}
        body={dict.locations.intro}
        imageUrl={brandAssets.heroShip}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <article
              key={office.id}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm"
            >
              <h2 className="font-display text-xl text-navy-900">
                {zh ? office.cityZh : office.city}
                {office.role ? (
                  <span className="ml-2 text-sm font-normal text-cyan-500">
                    ({zh ? office.roleZh : office.role})
                  </span>
                ) : null}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {zh ? office.addressZh : office.address}
              </p>
              <dl className="mt-4 space-y-1 text-sm">
                <div>
                  <dt className="inline text-muted">{dict.locations.tel}: </dt>
                  <dd className="inline">
                    <a href={`tel:${office.tel}`} className="text-navy-900 hover:text-cyan-500">
                      {office.tel}
                    </a>
                  </dd>
                </div>
                {office.fax ? (
                  <div>
                    <dt className="inline text-muted">{dict.locations.fax}: </dt>
                    <dd className="inline">{office.fax}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className="inline text-muted">{dict.locations.email}: </dt>
                  <dd className="inline">
                    <a
                      href={`mailto:${office.email}`}
                      className="text-navy-900 hover:text-cyan-500"
                    >
                      {office.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
