# BakeStead

BakeStead is the Farmers' Market brand of the Homestead Network Corporation.

Under the BakeStead table you will find herbs, breads, baked goodies, and other cottage foods — grown and made across our homesteads and sold at local markets.

"BakeStead" is a trademark of the Homestead Network Corporation and available for franchise under license. Unauthorized use is prohibited.

## Astro base (focused production)

This repository holds the Astro v7 static source on `main` and publishes the
built site from the `gh-pages` branch root (with `CNAME=bakestead.com` and an
empty `.nojekyll`). Never commit built output to the `main` root.

- Stack: Astro `7.3.1` pinned, `output: 'static'`, prerendered, no adapter, no WordPress.
- Composition: `src/pages/index.astro` preserves the approved header, the
  four-cell Herbs / Breads / Goodies / Cottage Foods grid (driven by the strict
  `categories` collection in `src/content.config.ts`), and the trademark footer.
- Source layout: `src/pages`, `src/layouts`, `src/components`,
  `src/content.config.ts` + `src/content/categories`, `src/assets` (four
  original SVG placeholders), `public/` (`CNAME`, `favicon.svg`, `.nojekyll` only).
- Media provenance: `.astro-magazine/media/manifest.json`. Base ships original
  artwork only; any future photographic placeholder must be CC-licensed with
  provenance recorded before use.
- Transition note: the legacy static `index.html` at the `main` root stays in
  place until the `gh-pages` cutover is confirmed live; then it retires in a
  follow-up so there is no gap in serving.

### Verify

```sh
npm ci
npm run check
npm run build
```

Serve `dist/` locally (e.g. `python3 -m http.server -d dist 8000`) and check
`dist/index.html` at 390px and 1440px, keyboard-only, JavaScript disabled, with
no horizontal overflow.
