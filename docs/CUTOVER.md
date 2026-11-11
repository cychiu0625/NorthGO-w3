# Phase 4 — Staging, redirects & cutover

## Pre-flight checklist

- [ ] `npm run build` succeeds
- [ ] Smoke test: `/`, `/zh-tw`, services ×4, `/about`, `/locations`, `/contact`, `/news`, legal ×4
- [ ] Enquiry form: submit without `RESEND_API_KEY` (logs OK) and with key (email received)
- [ ] Mobile nav + locale switcher
- [ ] No footer 404s (`/news`, `/locations`)
- [ ] Search Console property ready; sitemap `https://www.northgo.com/sitemap.xml`

## Staging

1. Deploy to Vercel preview (or preferred host).
2. Set env from `.env.example`.
3. Compare content against legacy Webflow site with stakeholders.
4. Approve visual + form + zh-TW copy.

## DNS / domain cutover

1. Point `www.northgo.com` (and apex if used) to the new deployment.
2. Keep Webflow project unpublished or redirecting after cutover.
3. Verify SSL and HSTS as configured by host.

## Redirect map (legacy → new)

| Legacy | New |
|--------|-----|
| `/` | `/` (en default) |
| `/zh-tw` | `/zh-tw` |
| `/ja` | `/ja` (EN content until Phase 5) |
| `/vi` | `/vi` (EN content until Phase 5) |
| `/about` | `/about` |
| `/contact` | `/contact` |
| `/services/*` | `/services/*` |
| `/legal/*` | `/legal/*` |
| `/news` | `/news` (shell; was 404) |
| `/locations` | `/locations` (new; was 404) |
| `/privacy`, `/terms`, `/cookies` | `/legal/...` (see `next.config.ts` / `vercel.json`) |

## Post-launch monitoring (first 2 weeks)

- Form success rate and spam volume
- 404 report in Search Console / host analytics
- Core Web Vitals (LCP focus on hero image)
- hreflang / zh-TW indexing

## Rollback

Retain Webflow publish capability for 14 days. If critical regression, re-point DNS to Webflow and hotfix on staging.
