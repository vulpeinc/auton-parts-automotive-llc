# Auton parts automotive LLC — Corporate Website

Static corporate website (HTML/CSS/JS + local SVGs). No build step, no external dependencies besides Google Fonts.

## Company data (confirmed from formation documents)

| Field | Value |
|---|---|
| Company (legal name) | Auton parts automotive LLC |
| Display brand | Auton Parts |
| Domain | **autonpartsautomotive.com** (recommended; .com registry showed it unregistered on 2026-10-20 — confirm at checkout) |
| Public e-mail | autompart@gmail.com |
| Business category | Automotive parts & maintenance products distribution (wholesale/retail) — automatic transmission focus |
| State of formation | Wyoming (Articles filed 09/17/2026) |
| Principal office | 525 Randall Ave, Ste 100-371, Cheyenne, WY 82001 |
| Mailing address | 425 W Colonial Dr, Ste 101-670, Orlando, FL 32804 |
| Registered Agent | Registered Agents Inc — 30 N Gould St, Ste R, Sheridan, WY 82801 |

Intentionally **not** published: EIN, member name, FinCEN ID, BOIR data, passport data, phone number (+55 — not confirmed for publication).

Recommended after registering the domain: create `contact@autonpartsautomotive.com` (Google Workspace or similar) and replace `autompart@gmail.com` in the 4 HTML files.

**Do not use `autompart.com`:** it is registered by a third party (since 2018).

> Canonical and Open Graph URLs point to `https://www.autonpartsautomotive.com/`. If a different domain is registered, search-and-replace `autonpartsautomotive.com` in the 4 HTML files.

## File structure

```
/
├── index.html
├── about.html
├── privacy.html
├── terms.html
├── style.css
├── script.js
├── vercel.json
├── README.md
└── assets/
    ├── fonts/            (Inter + Manrope, self-hosted, SIL OFL)
    ├── og-image.png      (1200×630 social preview)
    ├── apple-touch-icon.png
    ├── logo.svg
    ├── favicon.svg
    ├── hero-automotive.svg
    └── about-automotive.svg
```

## Deploy on Vercel

1. Push this folder to a GitHub repository (files at the repository root).
2. Vercel → **Add New → Project** → import the repository.
3. Settings:
   - **Framework Preset:** Other
   - **Root Directory:** ./
   - **Build Command:** leave empty
   - **Output Directory:** leave empty
   - **Install Command:** leave empty
4. Deploy.

## Domain configuration (when the domain is confirmed)

Recommended setup in Vercel → Project → Settings → Domains:

- `www.autonpartsautomotive.com` → connected to **Production**
- `autonpartsautomotive.com` → **308 Permanent Redirect** to `www.autonpartsautomotive.com`

Common DNS records for Vercel:

| Type | Host/Name | Value |
|---|---|---|
| A | @ | 216.198.79.1 |
| CNAME | www | cname.vercel-dns.com |

**Use the exact DNS values shown by Vercel if Vercel provides project-specific records.**

**Google Workspace / Squarespace / GoDaddy / Namecheap:** Do not delete MX, SPF, DKIM, DMARC or Google verification records used for email.

## Notes

- Cookie preference is stored in `localStorage` under `auton_cookie_consent`.
- Legal pages are general website notices and do not constitute legal advice.
