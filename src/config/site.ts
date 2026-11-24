import type { PublicLang } from '../i18n/config';

export const site = {
  name: 'Mayotte Chronicles',
  // GA4 measurement IDs are public by design (they appear in every page's HTML).
  gaMeasurementId: 'G-6Y7YS4GJW7',
  // Analytics only runs on the real public site, never in dev or `astro preview`.
  productionHost: 'daikiito-dk.github.io',
  consentStorageKey: 'mc-consent-v1',
  tallyForms: {
    en: 'e5axMJ',
    ja: 'KpVB5D',
    fr: '8NZpLr',
  } satisfies Record<PublicLang, string>,
} as const;
