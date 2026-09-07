import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Strict build-time collection for the four market-table categories.
// Invalid entries fail the build; drafts are excluded from getStaticPaths-style
// production queries by convention (no draft categories publish).
const categories = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/categories' }),
  schema: z
    .object({
      title: z.string().min(1).max(60),
      description: z.string().min(1).max(200),
      order: z.number().int().min(1).max(100),
    })
    .strict(),
});

export const collections = { categories };
