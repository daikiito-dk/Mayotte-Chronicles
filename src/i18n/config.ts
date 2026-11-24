export type LangStatus = 'public' | 'coming-soon';

export interface Language {
  code: LangCode;
  name: string;
  status: LangStatus;
  /** BCP 47 locale passed to Intl for dates. */
  intl?: string;
}

export const langCodes = ['ja', 'fr', 'en', 'swb', 'buc'] as const;
export type LangCode = (typeof langCodes)[number];

export const publicLangs = ['ja', 'fr', 'en'] as const;
export type PublicLang = (typeof publicLangs)[number];

export const defaultLang: PublicLang = 'en';

/** Display order of the language switcher (SPEC 3.1). */
export const languages: Language[] = [
  { code: 'ja', name: '日本語', status: 'public', intl: 'ja-JP' },
  { code: 'fr', name: 'Français', status: 'public', intl: 'fr-FR' },
  { code: 'en', name: 'English', status: 'public', intl: 'en-US' },
  { code: 'swb', name: 'Shimaore', status: 'coming-soon' },
  { code: 'buc', name: 'Kibushi', status: 'coming-soon' },
];

export function isPublicLang(value: string): value is PublicLang {
  return (publicLangs as readonly string[]).includes(value);
}

export function getLanguage(code: LangCode): Language {
  const lang = languages.find((l) => l.code === code);
  if (!lang) throw new Error(`Unknown language: ${code}`);
  return lang;
}

export const categories = ['society', 'culture', 'nature', 'travel', 'people', 'food', 'history'] as const;
export type Category = (typeof categories)[number];

export const authorIds = ['daiki-ito'] as const;
export type AuthorId = (typeof authorIds)[number];
