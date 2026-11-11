# Northgo Asset Inventory (Phase 0)

Source: https://www.northgo.com/ (Webflow) — captured 2026-11-11

## Brand

| Item | Value |
|------|--------|
| Name | Northgo (rebrand 2024-11-11 from Max Seair Logistics Inc.) |
| Founded | 1988, Taipei |
| Tagline | Making logistics effortless. |
| Primary accent | Cyan `#00D7E1` |
| Navy / deep | `#061525` / ocean imagery |
| Type (live) | Universal Sans (Typekit), Inter Display/Text, M PLUS 2 (CJK) |
| Agency credit | Strategy Creative |

## Image CDN (Webflow)

Base: `https://cdn.prod.website-files.com/66fc7398f8b5d731b52bcefb/`

- Service icons: `NG_Icon_Freight-Logistics_Light.svg`, `NG_Icon_Project-Logistics_Light.svg`, `NG_Icon_Warehouset-Logistics_Light.svg`, `NG_Icon_Port-Agency_Light.svg`
- Hero / section: `NG_Planes-Duotone.avif`, `NG_Plane.webp`
- Trust photos (alt currently "placeholder"): Trusted Experts, Flexible logistics, People-oriented, Committed to success JPGs
- Certifications: `IATA_logo.svg`, `ISO-45001_logo.svg`, `AEO_logo.webp`

## Site map (legacy)

- `/`, `/about`, `/contact`
- `/services/freight-logistics`, `project-logistics`, `warehouse-logistics`, `shipping-agency`
- `/legal/privacy-policy`, `/legal/terms`, `/legal/cookie-policy`, `/legal/disclaimer`
- Broken: `/news` (404), `/locations` (404; footer sometimes points to `/contact`)

## Offices

Taipei (HQ), Taichung, Kaohsiung, Los Angeles, Ho Chi Minh, Tokyo, Osaka — emails `info.{tpe|txg|khh|lax|hcmc|tyo|osa}@northgo.com`

## Client-provided gaps (needed for polish)

- [ ] Official logo package (SVG/PNG, light/dark)
- [ ] Font license for Universal Sans (or approve substitute: Outfit + Source Sans 3 + Noto Sans TC)
- [ ] Real customer logos / testimonials (remove Name Surname placeholders)
- [ ] Case study photography
- [ ] Confirmed social profile URLs (footer social currently `#`)
- [ ] Enquiry inbox / CRM webhook / spam protection keys
- [ ] News CMS content owners

## Rebuild decisions

- Stack: Next.js App Router + Tailwind + dictionary i18n (`en`, `zh-tw`; `ja`/`vi` shells)
- Fonts: Outfit (display), Source Sans 3 (body), Noto Sans TC (CJK)
- Imagery: curated remote Webflow CDN assets + CSS atmosphere; no fake testimonials
