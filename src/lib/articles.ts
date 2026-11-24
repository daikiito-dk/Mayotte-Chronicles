import { getCollection, type CollectionEntry } from 'astro:content';
import { isPublicLang, type PublicLang } from '../i18n/config';

export type Article = CollectionEntry<'articles'>;

const descriptionLimits: Partial<Record<string, number>> = { ja: 120 };
const defaultDescriptionLimit = 160;

let validated: Promise<Article[]> | undefined;

function folderAndSlug(entry: Article): { folder: string; slug: string } {
  const [folder = '', ...rest] = entry.id.split('/');
  return { folder, slug: rest.join('/') };
}

/** Cross-entry rules from SPEC 5.3 that a per-entry schema cannot express. */
function validate(entries: Article[]): Article[] {
  const errors: string[] = [];
  const placeholders: string[] = [];
  const keys = new Map<string, Article>();

  for (const entry of entries) {
    const { data } = entry;
    const where = `content/articles/${entry.id}`;
    const { folder, slug } = folderAndSlug(entry);

    if (folder !== data.lang) errors.push(`${where}: lang "${data.lang}" does not match folder "${folder}"`);
    // Translations share the same URL slug, so the file name is the translationKey.
    if (slug !== data.translationKey) errors.push(`${where}: file name must equal translationKey "${data.translationKey}"`);
    if (!isPublicLang(data.lang) && !data.draft) errors.push(`${where}: "${data.lang}" is not a public language yet; set draft: true`);

    const limit = descriptionLimits[data.lang] ?? defaultDescriptionLimit;
    const length = [...data.description].length;
    if (length > limit) errors.push(`${where}: description is ${length} characters (max ${limit})`);

    const key = `${data.lang}/${data.translationKey}`;
    if (keys.has(key)) errors.push(`${where}: duplicate translationKey "${data.translationKey}" in "${data.lang}"`);
    keys.set(key, entry);

    if (data.heroImage.src.includes('placeholder')) placeholders.push(where);
  }

  for (const entry of entries) {
    const { translatedFrom, lang, translationKey } = entry.data;
    if (!translatedFrom) continue;
    const where = `content/articles/${entry.id}`;
    if (translatedFrom === lang) errors.push(`${where}: translatedFrom must differ from lang`);
    else if (!keys.has(`${translatedFrom}/${translationKey}`))
      errors.push(`${where}: original "${translatedFrom}/${translationKey}" does not exist`);
  }

  if (errors.length) throw new Error(`Article validation failed:\n- ${errors.join('\n- ')}`);
  if (placeholders.length)
    console.warn(`[mayotte-chronicles] ${placeholders.length} article(s) still use the placeholder image:\n  ${placeholders.join('\n  ')}`);
  return entries;
}

/** Every article, drafts included, validated once per build. */
export function getAllArticles(): Promise<Article[]> {
  validated ??= getCollection('articles').then(validate);
  return validated;
}

/** Articles visible on the site: drafts appear only in `astro dev` (for review). */
export async function getVisibleArticles(lang?: PublicLang): Promise<Article[]> {
  const all = await getAllArticles();
  return all
    .filter((a) => isPublicLang(a.data.lang))
    .filter((a) => import.meta.env.DEV || !a.data.draft)
    .filter((a) => !lang || a.data.lang === lang)
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export function articleSlug(entry: Article): string {
  return entry.data.translationKey;
}

/** Visible translations of an article, keyed by language (including itself). */
export async function getTranslations(entry: Article): Promise<Partial<Record<PublicLang, Article>>> {
  const visible = await getVisibleArticles();
  const result: Partial<Record<PublicLang, Article>> = {};
  for (const a of visible) {
    if (a.data.translationKey === entry.data.translationKey && isPublicLang(a.data.lang)) result[a.data.lang] = a;
  }
  return result;
}

export function readingMinutes(body: string | undefined, lang: PublicLang): number {
  const text = (body ?? '').replace(/```[\s\S]*?```/g, '').replace(/[#>*_`\[\]()!-]/g, ' ');
  const minutes = lang === 'ja' ? [...text.replace(/\s+/g, '')].length / 500 : text.split(/\s+/).filter(Boolean).length / 220;
  return Math.max(1, Math.round(minutes));
}
