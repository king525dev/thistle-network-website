# Thistle Network — Frontend MVP

Next.js (App Router + TypeScript) public website for Thistle Network, a
Scottish apprentice-led community. Runs entirely on mock data - no
backend or Strapi instance required.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Routes: `/`, `/gallery`, `/news`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint

## Architecture

- `app/` — routes only (thin, compose components)
- `components/ui`, `components/brand`, `components/layout`,
  `components/home`, `components/gallery`, `components/news`
- `data/mock/` — all mock content (news, gallery, events, FAQ, site config)
- `types/` — application-level domain types (never Strapi's raw shape)
- `lib/strapi/` — Strapi client/mappers/queries boundary (stubbed, not
  wired up yet — see comments in each file)
- `lib/analytics/` — `trackEvent()` no-op abstraction

See the implementation summary provided alongside this project for full
details on the Client/Server component split, the Strapi boundary, and
what's left for backend integration.
