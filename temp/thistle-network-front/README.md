# Thistle Network — Frontend

Next.js (App Router + TypeScript) website for Thistle Network.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

With no environment variables the site shows built-in fallback content
(`data/mock/`). To read content from Strapi, create `.env.local`:

```
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=            # optional, server-side only
```

Restart `npm run dev` after changing `.env.local`.

## Where content comes from

`app/**/page.tsx` -> `lib/content.ts` -> Strapi (`lib/strapi/*`) or fallback (`data/mock/*`)

- Page copy (Home, Gallery, News): Strapi single types
- News posts and gallery albums: Strapi collection types
- Events, FAQ, nav, footer, site settings: still local (`data/mock/`)

Note: `npm run build` fetches content, so Strapi must be running while you build.
