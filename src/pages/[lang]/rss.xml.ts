import rss from '@astrojs/rss';
import type { APIRoute, GetStaticPaths } from 'astro';
import { getLanguage, publicLangs, type PublicLang } from '../../i18n/config';
import { categoryNames, useTranslations } from '../../i18n/ui';
import { getVisibleArticles } from '../../lib/articles';
import { absolute, langPath } from '../../lib/urls';
import { site } from '../../config/site';

export const getStaticPaths = (() => publicLangs.map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params, site: siteUrl }) => {
  const lang = params.lang as PublicLang;
  const t = useTranslations(lang);
  const articles = await getVisibleArticles(lang);
  return rss({
    title: `${site.name} (${getLanguage(lang).name})`,
    description: t['site.tagline'],
    site: absolute(langPath(lang), siteUrl),
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.publishedAt,
      link: absolute(langPath(lang, 'articles', a.data.translationKey), siteUrl),
      categories: [categoryNames[lang][a.data.category]],
    })),
    customData: `<language>${lang}</language>`,
  });
};
