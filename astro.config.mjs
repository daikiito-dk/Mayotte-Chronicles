import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://daikiito-dk.github.io',
  base: '/Mayotte-Chronicles',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ja: 'ja', fr: 'fr' },
      },
    }),
  ],
});
