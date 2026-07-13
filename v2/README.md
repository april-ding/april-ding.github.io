# collectiv — Photography Portfolio (v2)

Local-only redesign of the photography portfolio. This lives in `v2/` and does **not** replace the live site at the repo root until you choose to deploy it.

## Local development

```bash
cd v2
npm install --registry=https://registry.npmjs.org
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Adding photos

1. Place image files in `v2/public/photos/`
2. Add entries in `src/data/site.ts` under the `collections` array

## Before going live

- Replace placeholder copy in the About page
- Add Polaroids photos in `src/data/site.ts` when ready
- Run `npm run build` and deploy the `dist/` output when ready

## What stays untouched

The existing portfolio at the repo root (`index.html`, etc.) is unchanged. GitHub Pages will keep serving the current site until you explicitly switch over.
