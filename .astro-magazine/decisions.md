# Editorial and engineering decisions

## 2026-09-07 — BakeStead base, focused-production
- Mode: focused-production (not 150-article program). Single route `/` preserving legacy composition.
- Astro: v7 latest stable 7.3.x, `output: 'static'`, no adapter, prerender. No WordPress.
- Source of truth: GitLab `homesteadnet/bakestead` HEAD `040d6b9`. GitHub mirror diverged by 2 CNAME-only commits (`dce2455` Delete CNAME, `e6ad203` Create CNAME); content equivalent (`bakestead.com` vs `bakestead.com\n`). Resolve in favor of GitLab via mirror (`keep_divergent_refs=false`); never commit direct to GitHub.
- Publishing: Pages serves `gh-pages` branch (cutover running). Publish Astro `dist/*` to `gh-pages` root on GitLab carrying `CNAME=bakestead.com` + empty `.nojekyll`. Never overwrite `main` root with built output. `gh-pages` does not exist yet at kickoff — prepare it from verified `dist`.
- Preservation contract: header (BakeStead + Farmers' Market brand line), 4-cell grid (Herbs/Breads/Goodies/Cottage Foods copy), trademark footer. Recomposed in original Astro code only.
- Public contract: `public/` holds only `CNAME`, `favicon.svg`, `.nojekyll` so `dist` carries Pages requirements verbatim.
- Media: no external photos in base. Four original SVG placeholders in `src/assets/` (original authorship, no license burden); manifest documents provenance. Any future photos must be CC-licensed with manifest provenance.

## 2026-09-07 — Visual verification fix (caught by screenshots, fixed before release)
- Defect: document-shell CSS lived in `BaseLayout.astro`'s scoped `<style>`, so Astro
  scoped `header`/`main`/`.card`/`.grid` selectors to the layout's template scope while
  those elements render in child components — page shipped unstyled (caught at 1440px/390px).
- Fix: `<style is:global>` in `BaseLayout` (documented as the single shell stylesheet),
  verified `header{...}` unscoped in `dist/index.html` with zero `data-astro-cid`.
- Also: card artwork set to eager (inline sub-2KB SVG data URIs, zero network, deterministic
  first render — first lazy capture raced the screenshot timer), `tabindex="-1"` on
  `<main id="main-content">` for reliable skip-link focus. Rebuilt, re-verified both widths.

