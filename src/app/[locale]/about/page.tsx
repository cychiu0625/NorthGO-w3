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
    title: dict.about.title,
    description: dict.about.intro,
    alternates: { canonical: localePath(raw, "/about") },
  };
}

export default async function AboutPage({
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
      <PageHero title={dict.about.title} body={dict.about.intro} imageUrl={brandAssets.plane} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 lg:px-8">
        <div className="rounded-2xl border border-line bg-white p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-cyan-500 uppercase">
            {dict.about.visionTitle}
          </p>
          <p className="font-display mt-3 text-2xl text-navy-900">{dict.about.vision}</p>
        </div>
        <div className="rounded-2xl border border-line bg-white p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-cyan-500 uppercase">
            {dict.about.missionTitle}
          </p>
          <p className="font-display mt-3 text-2xl text-navy-900">{dict.about.mission}</p>
        </div>
      </section>

      <section className="bg-sand-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-navy-900">{dict.about.valuesTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {dict.about.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display text-xl text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <h2 className="font-display text-3xl text-navy-900">{dict.about.storyTitle}</h2>
        <div className="mt-6 space-y-4 text-muted leading-relaxed">
          {dict.about.story.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
    </>
  );
}
