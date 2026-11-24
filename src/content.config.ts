import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { authorIds, categories, langCodes, publicLangs } from './i18n/config';

const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/articles' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(1),
        description: z.string().min(1),
        lang: z.enum(langCodes),
        translationKey: z.string().regex(slug),
        type: z.enum(['article', 'explainer', 'photo']),
        category: z.enum(categories),
        tags: z.array(z.string().regex(slug)).default([]),
        author: z.enum(authorIds),
        publishedAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        heroImage: image(),
        heroAlt: z.string().min(1),
        heroCredit: z.string().min(1),
        translatedFrom: z.enum(publicLangs).optional(),
        sources: z.array(z.object({ title: z.string().min(1), url: z.url() })).default([]),
        corrections: z.array(z.object({ date: z.coerce.date(), note: z.string().min(1) })).default([]),
        draft: z.boolean().default(false),
      })
      .strict(),
});

export const collections = { articles };
