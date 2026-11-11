"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-web";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function assetUrl(path: string) {
  return `${basePath}${path}`;
}

const ASSETS = {
  light: {
    lottie: "/brand/NG-Logo_Teal-Blue.lottie",
    svg: "/brand/northgo-logo-teal-blue.svg",
  },
  footer: {
    lottie: "/brand/Full-logo-Teal-White.lottie",
    svg: "/brand/northgo-logo-teal-white.svg",
  },
  dark: {
    lottie: "/brand/NG-Logo_Teal-Blue.lottie",
    svg: "/brand/northgo-logo-teal-blue.svg",
  },
} as const;

export type LogoVariant = keyof typeof ASSETS;

/** Official aspect ratio 1070×210 */
export const LOGO_WIDTH = 148;
export const LOGO_HEIGHT = 29;

function StaticLogo({
  src,
  priority,
}: {
  src: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt="Northgo"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className="h-7 w-auto"
      priority={priority}
      unoptimized
    />
  );
}

export function LogoMark({
  variant = "light",
}: {
  variant?: LogoVariant;
}) {
  const asset = ASSETS[variant];
  const [reduceMotion, setReduceMotion] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!dotLottie) return;
    const onLoadError = () => setFailed(true);
    const onLoad = () => setReady(true);
    dotLottie.addEventListener("loadError", onLoadError);
    dotLottie.addEventListener("load", onLoad);
    return () => {
      dotLottie.removeEventListener("loadError", onLoadError);
      dotLottie.removeEventListener("load", onLoad);
    };
  }, [dotLottie]);

  const onDotLottieRef = useCallback((instance: DotLottie | null) => {
    setDotLottie(instance);
  }, []);

  if (reduceMotion || failed) {
    return <StaticLogo src={asset.svg} priority={variant === "light"} />;
  }

  return (
    <span
      className="relative inline-block h-7 overflow-hidden"
      style={{ width: LOGO_WIDTH }}
      aria-hidden
    >
      {!ready && (
        <StaticLogo src={asset.svg} priority={variant === "light"} />
      )}
      <DotLottieReact
        src={assetUrl(asset.lottie)}
        autoplay
        loop={false}
        className={`absolute inset-0 h-7 w-full ${ready ? "opacity-100" : "opacity-0"}`}
        style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
        dotLottieRefCallback={onDotLottieRef}
      />
    </span>
  );
}
