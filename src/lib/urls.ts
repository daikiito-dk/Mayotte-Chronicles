import type { PublicLang } from '../i18n/config';

const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Site-relative URL including the GitHub Pages base path, always with a trailing slash. */
export function path(...segments: string[]): string {
  const joined = segments
    .flatMap((s) => s.split('/'))
    .filter(Boolean)
    .join('/');
  return joined ? `${base}/${joined}/` : `${base}/`;
}

/** URL of a file (no trailing slash), e.g. rss.xml. */
export function filePath(...segments: string[]): string {
  return path(...segments).replace(/\/$/, '');
}

export function langPath(lang: PublicLang, ...segments: string[]): string {
  return path(lang, ...segments);
}

export function absolute(url: string, site: URL | undefined): string {
  return new URL(url, site).toString();
}
