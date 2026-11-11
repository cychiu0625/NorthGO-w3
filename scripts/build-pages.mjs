import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = path.join(root, "src", "app", "api");
const apiPark = path.join(root, ".pages-exclude", "api");
const proxyFile = path.join(root, "src", "proxy.ts");
const proxyPark = path.join(root, ".pages-exclude", "proxy.ts");
const robotsFile = path.join(root, "src", "app", "robots.ts");
const robotsPark = path.join(root, ".pages-exclude", "robots.ts");
const sitemapFile = path.join(root, "src", "app", "sitemap.ts");
const sitemapPark = path.join(root, ".pages-exclude", "sitemap.ts");

function run(cmd, args, env = {}) {
  const res = spawnSync(cmd, args, {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, ...env },
    shell: process.platform === "win32",
  });
  if (res.status !== 0) process.exit(res.status ?? 1);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function moveSafe(from, to) {
  if (!fs.existsSync(from)) return;
  ensureDir(path.dirname(to));
  if (fs.existsSync(to)) fs.rmSync(to, { recursive: true, force: true });
  try {
    fs.renameSync(from, to);
  } catch {
    fs.cpSync(from, to, { recursive: true });
    fs.rmSync(from, { recursive: true, force: true });
  }
}

function park() {
  ensureDir(path.join(root, ".pages-exclude"));
  moveSafe(apiDir, apiPark);
  moveSafe(proxyFile, proxyPark);
  moveSafe(robotsFile, robotsPark);
  moveSafe(sitemapFile, sitemapPark);
}

function restore() {
  moveSafe(apiPark, apiDir);
  moveSafe(proxyPark, proxyFile);
  moveSafe(robotsPark, robotsFile);
  moveSafe(sitemapPark, sitemapFile);
}

const basePath = process.env.BASE_PATH || "/NorthGO-w3";

try {
  // Drop stale caches / typed routes that still point at /api
  fs.rmSync(path.join(root, ".next"), { recursive: true, force: true });
  fs.rmSync(path.join(root, "out"), { recursive: true, force: true });
  park();
  run("npx", ["next", "build", "--webpack"], {
    GITHUB_PAGES: "true",
    BASE_PATH: basePath,
    NEXT_PUBLIC_STATIC_EXPORT: "true",
    NEXT_PUBLIC_BASE_PATH: basePath,
  });

  const outDir = path.join(root, "out");
  const enIndex = path.join(outDir, "en", "index.html");
  const rootIndex = path.join(outDir, "index.html");
  if (fs.existsSync(enIndex)) {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta http-equiv="refresh" content="0;url=./en/"/><link rel="canonical" href="./en/"/><title>Northgo</title></head><body><p><a href="./en/">Continue to Northgo</a></p></body></html>`;
    fs.writeFileSync(rootIndex, html);
    fs.copyFileSync(enIndex, path.join(outDir, "404.html"));
  }

  console.log("GitHub Pages export ready in /out");
} finally {
  restore();
}
