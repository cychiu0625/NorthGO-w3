import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { localePath } from "@/lib/paths";
import { Logo } from "./Logo";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  // Fixed copyright year avoids unstable Date during Cache Components prerender
  const year = 2026;

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 lg:col-span-1">
          <Logo locale={locale} variant="footer" />
          <p className="max-w-xs text-sm text-white/70">{dict.footer.tagline}</p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {dict.footer.company}
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href={localePath(locale, "/news")} className="hover:text-cyan-300">
                {dict.nav.news}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/about")} className="hover:text-cyan-300">
                {dict.nav.about}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/contact")} className="hover:text-cyan-300">
                {dict.nav.contact}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/locations")} className="hover:text-cyan-300">
                {dict.nav.locations}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {dict.footer.services}
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link
                href={localePath(locale, "/services/freight-logistics")}
                className="hover:text-cyan-300"
              >
                {dict.services.freight.title}
              </Link>
            </li>
            <li>
              <Link
                href={localePath(locale, "/services/project-logistics")}
                className="hover:text-cyan-300"
              >
                {dict.services.project.title}
              </Link>
            </li>
            <li>
              <Link
                href={localePath(locale, "/services/warehouse-logistics")}
                className="hover:text-cyan-300"
              >
                {dict.services.warehouse.title}
              </Link>
            </li>
            <li>
              <Link
                href={localePath(locale, "/services/shipping-agency")}
                className="hover:text-cyan-300"
              >
                {dict.services.shipping.title}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {dict.footer.legal}
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link
                href={localePath(locale, "/legal/privacy-policy")}
                className="hover:text-cyan-300"
              >
                {dict.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/legal/terms")} className="hover:text-cyan-300">
                {dict.footer.terms}
              </Link>
            </li>
            <li>
              <Link
                href={localePath(locale, "/legal/cookie-policy")}
                className="hover:text-cyan-300"
              >
                {dict.footer.cookies}
              </Link>
            </li>
            <li>
              <Link
                href={localePath(locale, "/legal/disclaimer")}
                className="hover:text-cyan-300"
              >
                {dict.footer.disclaimer}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>{dict.footer.rights.replace("{year}", String(year))}</p>
          <a
            href="https://www.strategy.co.nz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300"
          >
            {dict.footer.designed}
          </a>
        </div>
      </div>
    </footer>
  );
}
