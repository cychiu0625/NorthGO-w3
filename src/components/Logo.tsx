import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/lib/paths";
import { LogoMark, type LogoVariant } from "./LogoMark";

export function Logo({
  locale,
  variant = "light",
}: {
  locale: Locale;
  variant?: LogoVariant;
}) {
  return (
    <Link
      href={localePath(locale)}
      className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
      aria-label="Northgo home"
    >
      <LogoMark variant={variant} />
    </Link>
  );
}
