# Greenwatt Global Ventures — website

Marketing site for Greenwatt Global Ventures (electrical testing equipment and services), with a contact form and a small admin area for reviewing enquiries.

Built with Next.js 16 (App Router), React 19, and Tailwind CSS 4. Deployed on Vercel.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in the values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See [`.env.local.example`](.env.local.example) for the full list.

| Variable | Used for |
|---|---|
| `ADMIN_PASSWORD` | Password for `/admin/login` |
| `ADMIN_SESSION_SECRET` | HMAC key for the admin session cookie |
| `NEXT_PUBLIC_SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` | Storing and reading contact form submissions |
| `RESEND_API_KEY` | Emailing a notification for each new submission |
| `RESEND_FROM` (optional) | Sender address on a verified Resend domain |

The public pages build and run without any of these; only the contact form and `/admin` need them.

## Project layout

- `app/` — routes. Product, service, and sector detail pages are generated from the data in `lib/`.
- `app/actions/` — server actions for the contact form and admin.
- `app/admin/` — enquiry dashboard, protected by `proxy.ts` and a session check in each admin action.
- `components/` — shared page sections (navbar, hero, footer, …).
- `lib/products.ts`, `lib/services.ts`, `lib/sectors.ts` — site content.
- `lib/site.ts` — canonical site URL used for metadata, sitemap, and email links.
- `content/` — source copy for the site pages (reference only; not read at build time).
- `public/wp-uploads/` — images migrated from the previous WordPress site.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint
