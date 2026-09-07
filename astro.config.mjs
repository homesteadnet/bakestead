import { defineConfig } from 'astro/config';

// BakeStead base: fully static, prerendered, no adapter, no SSR.
// Published output (dist/) goes to the `gh-pages` branch root (with
// CNAME + empty .nojekyll); `main` holds this Astro source.
export default defineConfig({
  site: 'https://bakestead.com',
  output: 'static',
  build: {
    format: 'file',
  },
});
