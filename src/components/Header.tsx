"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { localeLabels, locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { localePath } from "@/lib/paths";
import { Logo } from "./Logo";

const serviceLinks = [
  { slug: "freight-logistics", key: "freight" as const },
  { slug: "project-logistics", key: "project" as const },
  { slug: "warehouse-logistics", key: "warehouse" as const },
  { slug: "shipping-agency", key: "shipping" as const },
];

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 lg:px-8">
        <Logo locale={locale} variant="light" />

        <nav className="hidden items-center gap-7 text-sm text-white/90 lg:flex">
          <Link href={`${localePath(locale)}#why-northgo`} className="hover:text-cyan-300">
            {dict.nav.why}
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-cyan-300"
              aria-expanded={servicesOpen}
            >
              {dict.nav.services}
              <span aria-hidden>▾</span>
            </button>
            {servicesOpen ? (
              <div className="absolute left-0 top-full pt-3">
                <div className="min-w-56 rounded-xl border border-white/10 bg-navy-900/95 p-2 shadow-xl backdrop-blur">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.slug}
                      href={localePath(locale, `/services/${item.slug}`)}
                      className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10 hover:text-cyan-300"
                    >
                      {dict.services[item.key].title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <Link href={localePath(locale, "/about")} className="hover:text-cyan-300">
            {dict.nav.about}
          </Link>
          <Link href={localePath(locale, "/locations")} className="hover:text-cyan-300">
            {dict.nav.locations}
          </Link>
          <Link href={localePath(locale, "/contact")} className="hover:text-cyan-300">
            {dict.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <label className="sr-only" htmlFor="locale-select">
            Language
          </label>
          <select
            id="locale-select"
            className="hidden rounded-full border border-white/25 bg-transparent px-2 py-1 text-xs text-white md:block"
            value={locale}
            onChange={(e) => {
              const next = e.target.value as Locale;
              const path = window.location.pathname.replace(/^\/(zh-tw|ja|vi)/, "") || "/";
              window.location.href = localePath(next, path === "/" ? "" : path);
            }}
          >
            {locales.map((l) => (
              <option key={l} value={l} className="text-navy-900">
                {localeLabels[l]}
              </option>
            ))}
          </select>

          <Link
            href={localePath(locale, "/contact#enquiry-form")}
            className="btn-primary hidden rounded-full px-4 py-2 text-sm font-semibold sm:inline-flex"
          >
            {dict.nav.enquire}
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white lg:hidden"
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy-950/95 px-5 py-4 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-3 text-white">
            <Link href={`${localePath(locale)}#why-northgo`} onClick={() => setOpen(false)}>
              {dict.nav.why}
            </Link>
            {serviceLinks.map((item) => (
              <Link
                key={item.slug}
                href={localePath(locale, `/services/${item.slug}`)}
                onClick={() => setOpen(false)}
              >
                {dict.services[item.key].title}
              </Link>
            ))}
            <Link href={localePath(locale, "/about")} onClick={() => setOpen(false)}>
              {dict.nav.about}
            </Link>
            <Link href={localePath(locale, "/locations")} onClick={() => setOpen(false)}>
              {dict.nav.locations}
            </Link>
            <Link href={localePath(locale, "/contact")} onClick={() => setOpen(false)}>
              {dict.nav.contact}
            </Link>
            <Link
              href={localePath(locale, "/contact#enquiry-form")}
              className="btn-primary mt-2 inline-flex justify-center rounded-full px-4 py-2 text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              {dict.nav.enquire}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
