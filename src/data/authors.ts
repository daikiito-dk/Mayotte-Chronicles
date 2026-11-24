import type { ImageMetadata } from 'astro';
import type { AuthorId, PublicLang } from '../i18n/config';
import daikiIto from '../../content/images/authors/daiki-ito.jpg';

export interface Author {
  id: AuthorId;
  name: string;
  photo: ImageMetadata;
  role: Record<PublicLang, string>;
  bio: Record<PublicLang, string>;
}

export const authors: Record<AuthorId, Author> = {
  'daiki-ito': {
    id: 'daiki-ito',
    name: 'Daiki Ito',
    photo: daikiIto,
    role: {
      en: 'Founder & Editor',
      ja: '創設者・編集人',
      fr: 'Fondateur et rédacteur en chef',
    },
    bio: {
      en: 'Daiki Ito is the founder and editor of Mayotte Chronicles. Based in Tokyo, he works in AI business development and approaches the world as a data-driven strategist. Fascinated by the places where technology, human psychology, and the way we design our lives meet, he also writes essays on enterprise AI, self-discovery, and living with agency. Mayotte Chronicles is his effort to understand an island still little known in Japan and the English-speaking world, and to share it with care: its people, its languages, its nature, and its history. Aim high, stay grounded.',
      ja: 'Daiki Ito（ダイキ・イトウ）。Mayotte Chronicles 創設者・編集人。東京を拠点に、AI の事業開発に携わるデータドリブンなストラテジスト。テクノロジーと人の心理、そして自分らしい生き方の設計が交わるところに関心を持ち、エンタープライズ AI や自己理解、主体的な生き方をテーマにエッセイを書いてきた。日本や英語圏ではまだほとんど知られていない島マヨットを、人・言葉・自然・歴史を通して丁寧に知り、伝えるためにこのメディアを始めた。モットーは「Aim high, stay grounded.（志は高く、足は地に）」。',
      fr: 'Daiki Ito est le fondateur et rédacteur en chef de Mayotte Chronicles. Basé à Tokyo, il travaille dans le développement commercial de l’intelligence artificielle et aborde le monde en stratège attaché aux données. Passionné par la rencontre entre la technologie, la psychologie humaine et la manière dont chacun construit sa vie, il écrit aussi des essais sur l’IA en entreprise, la connaissance de soi et l’art de vivre en acteur de sa vie. Avec Mayotte Chronicles, il cherche à comprendre une île encore peu connue au Japon et dans le monde anglophone, et à la faire découvrir avec soin : ses habitants, ses langues, sa nature et son histoire. Sa devise : « Aim high, stay grounded. »',
    },
  },
};
