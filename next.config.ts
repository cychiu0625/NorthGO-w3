import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.BASE_PATH || (isGithubPages ? "/NorthGO-w3" : "");

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath,
        assetPrefix: basePath || undefined,
        images: { unoptimized: true },
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
        images: {
          remotePatterns: [
            {
              protocol: "https",
              hostname: "cdn.prod.website-files.com",
            },
            {
              protocol: "https",
              hostname: "images.unsplash.com",
            },
          ],
        },
        async redirects() {
          return [
            {
              source: "/privacy",
              destination: "/legal/privacy-policy",
              permanent: true,
            },
            {
              source: "/terms",
              destination: "/legal/terms",
              permanent: true,
            },
            {
              source: "/cookies",
              destination: "/legal/cookie-policy",
              permanent: true,
            },
            {
              source: "/zh-tw/privacy",
              destination: "/zh-tw/legal/privacy-policy",
              permanent: true,
            },
          ];
        },
      }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_STATIC_EXPORT: isGithubPages ? "true" : "false",
  },
};

export default nextConfig;
