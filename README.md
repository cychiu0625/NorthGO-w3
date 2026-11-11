# Northgo website (NorthGO-w3)

Next.js rebuild of [northgo.com](https://www.northgo.com/) — logistics brand site with EN + 繁體中文, enquiry form, locations, and SEO foundations.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS 4
- Dictionary i18n: `en`, `zh-tw` (full); `ja` / `vi` shells for Phase 2
- Contact API: `/api/contact` (console log + optional Resend)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local server
- `npm run build` — production build
- `npm run build:pages` — static export for GitHub Pages
- `npm run start` — serve build
- `npm run lint` — ESLint

## GitHub Pages

Push to `main` runs [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml). After the first deploy, enable **Settings → Pages → Source: GitHub Actions**. Site URL: `https://<user>.github.io/NorthGO-w3/`.

## Docs

- [Asset inventory](docs/ASSETS.md)
- [Cutover / redirects](docs/CUTOVER.md)
- [Phase 2 backlog](docs/PHASE2_BACKLOG.md)

## Env

Copy `.env.example` to `.env.local` and set Resend keys when ready to email enquiries.
