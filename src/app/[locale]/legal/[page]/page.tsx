import { notFound } from "next/navigation";
import { legalEn, legalZh } from "@/content/legal/en";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/lib/paths";

const pages = ["privacy-policy", "terms", "cookie-policy", "disclaimer"] as const;
type LegalPage = (typeof pages)[number];

const map: Record<LegalPage, "privacy" | "terms" | "cookies" | "disclaimer"> = {
  "privacy-policy": "privacy",
  terms: "terms",
  "cookie-policy": "cookies",
  disclaimer: "disclaimer",
};

export function generateStaticParams() {
  return locales.flatMap((locale) => pages.map((page) => ({ locale, page })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}) {
  const { locale: raw, page } = await params;
  if (!isLocale(raw) || !(page in map)) return {};
  const pack = raw === "zh-tw" ? legalZh : legalEn;
  const doc = pack[map[page as LegalPage]];
  return {
    title: doc.title,
    alternates: { canonical: localePath(raw, `/legal/${page}`) },
  };
}

export default async function LegalDocPage({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}) {
  const { locale: raw, page } = await params;
  if (!isLocale(raw) || !(page in map)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const pack = locale === "zh-tw" ? legalZh : legalEn;
  const doc = pack[map[page as LegalPage]];

  const blocks = doc.body
    .trim()
    .split(/\n(?=## )/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl px-5 py-28 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-cyan-500 uppercase">
        {dict.legal.updated}
      </p>
      <h1 className="font-display mt-3 text-4xl text-navy-900">{doc.title}</h1>
      <div className="prose-northgo mt-10 space-y-8 text-muted">
        {blocks.map((block) => {
          const lines = block.split("\n").filter(Boolean);
          const heading = lines[0]?.startsWith("## ")
            ? lines[0].replace(/^##\s+/, "")
            : null;
          const paras = heading ? lines.slice(1) : lines;
          return (
            <section key={block.slice(0, 24)}>
              {heading ? (
                <h2 className="font-display mb-3 text-xl text-navy-900">{heading}</h2>
              ) : null}
              {paras.map((p) =>
                p.startsWith("- ") ? (
                  <li key={p} className="ml-5 list-disc text-sm leading-relaxed">
                    {p.replace(/^- /, "")}
                  </li>
                ) : (
                  <p key={p} className="text-sm leading-relaxed">
                    {p}
                  </p>
                ),
              )}
            </section>
          );
        })}
      </div>
    </article>
  );
}
