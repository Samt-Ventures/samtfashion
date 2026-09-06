# SAMT Ventures Ltd

Premium fashion brand website for SAMT Ventures Ltd — curated vintage thrift, ready-to-wear, and custom-made fashion in Ogijo, Ikorodu, Lagos.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Hook Form + Zod
- Lucide React
- `next/image`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app` — App Router entry, layout, SEO metadata
- `src/components/layout` — Header, Footer
- `src/components/sections` — Page sections matching the Stitch design
- `src/components/ui` — Reusable UI (Button, ProductCard, CategoryCard, FadeIn)
- `src/components/forms` — Contact form with Zod validation
- `src/data` — Typed product, category, and site content
- `public/images` — Official SAMT logo and product photography

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint
