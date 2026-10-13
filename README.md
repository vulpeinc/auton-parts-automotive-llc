# Auton parts automotive LLC — Corporate Website

Static corporate website (HTML/CSS/JS + local SVGs). No build step, no external dependencies besides Google Fonts.

## Company data (confirmed from formation documents)

| Field | Value |
|---|---|
| Company (legal name) | Auton parts automotive LLC |
| Display brand | Auton Parts |
| Domain | **PENDING — awaiting client confirmation** (`DOMINIO.com`) |
| Public e-mail | autompart@gmail.com |
| Business category | Automotive parts & maintenance products distribution (wholesale/retail) — automatic transmission focus |
| State of formation | Wyoming (Articles filed 09/17/2026) |
| Principal office | 525 Randall Ave, Ste 100-371, Cheyenne, WY 82001 |
| Mailing address | 425 W Colonial Dr, Ste 101-670, Orlando, FL 32804 |
| Registered Agent | Registered Agents Inc — 30 N Gould St, Ste R, Sheridan, WY 82801 |

Intentionally **not** published: EIN, member name, FinCEN ID, BOIR data, passport data, phone number.

> The domain is not referenced in any HTML file. The site can be deployed now on the `*.vercel.app` URL and the domain attached later without code changes.

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

- `www.DOMINIO.com` → connected to **Production**
- `DOMINIO.com` → **308 Permanent Redirect** to `www.DOMINIO.com`

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
