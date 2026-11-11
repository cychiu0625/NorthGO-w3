import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
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
    title: dict.nav.contact,
    description: dict.contact.intro,
    alternates: { canonical: localePath(raw, "/contact") },
  };
}

export default async function ContactPage({
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
        title={dict.contact.title}
        body={dict.contact.intro}
        imageUrl={brandAssets.planes}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <ContactForm dict={dict} />
        <div>
          <h2 className="font-display text-2xl text-navy-900">{dict.contact.officesTitle}</h2>
          <ul className="mt-6 space-y-4">
            {offices.map((o) => (
              <li key={o.id} className="rounded-xl border border-line bg-white p-4 text-sm">
                <p className="font-semibold text-navy-900">{zh ? o.cityZh : o.city}</p>
                <a href={`mailto:${o.email}`} className="text-cyan-500 hover:underline">
                  {o.email}
                </a>
                <p className="mt-1 text-muted">
                  <a href={`tel:${o.tel}`}>{o.tel}</a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
