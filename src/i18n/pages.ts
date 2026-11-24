import type { PublicLang } from './config';

interface Section {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

interface AboutContent {
  lead: string;
  mission: Section;
  author: string;
  editorial: Section;
  languages: Section;
}

export const about: Record<PublicLang, AboutContent> = {
  en: {
    lead: 'Mayotte Chronicles is a web media dedicated to Mayotte, a French island department in the Comoros archipelago of the Indian Ocean.',
    mission: {
      heading: 'Our mission',
      paragraphs: [
        'Mayotte has one of the largest lagoons in the world and its own languages and culture, yet very little about it can be read in Japanese or English. We want to change that, carefully.',
      ],
      list: [
        'Tell the story of Mayotte’s culture, nature, people, and society, with the context behind them.',
        'Offer readers in Japanese and English a reliable first door into the island.',
        'Bring readers in French, and later in the island’s own languages, an outside perspective.',
      ],
    },
    author: 'Author',
    editorial: {
      heading: 'Editorial policy',
      paragraphs: [],
      list: [
        'Accuracy: figures, dates, and names are backed by sources listed at the end of each article, with official and primary sources first.',
        'Care: on topics such as migration, disasters, or poverty, we avoid wording that harms the dignity of the people concerned. Photos of people are used only with their consent.',
        'Corrections: when we find an error, we fix the article and note the date and content of the correction at the end. We never change articles silently.',
        'Image rights: every image shows its photographer or license.',
      ],
    },
    languages: {
      heading: 'Languages',
      paragraphs: [
        'Articles are written in English first. Japanese and French versions are produced with machine translation and reviewed by the editor before publication. Shimaore and Kibushi, the island’s languages, are coming soon.',
      ],
    },
  },
  ja: {
    lead: 'Mayotte Chronicles は、インド洋のコモロ諸島にあるフランスの海外県、マヨット（Mayotte）に特化したウェブメディアです。',
    mission: {
      heading: 'わたしたちの目標',
      paragraphs: [
        'マヨットには世界有数の規模のラグーンがあり、独自の言葉と文化があります。それなのに、日本語や英語で読める情報はほとんどありません。わたしたちは、その状況を丁寧に変えていきたいと考えています。',
      ],
      list: [
        'マヨットの文化・自然・人々・社会を、背景を含めて丁寧に伝えます。',
        '日本語と英語の読者に、信頼できる最初の入口を届けます。',
        'フランス語の読者、そして将来は島の言葉の読者にも、外からの視点を含む記事を届けます。',
      ],
    },
    author: '著者',
    editorial: {
      heading: '編集方針',
      paragraphs: [],
      list: [
        '正確さ: 数値・日付・固有名詞は、記事末尾に出典を記載します。公的機関などの一次情報を優先します。',
        '配慮: 移民、災害、貧困などの話題では、当事者の尊厳を損なう表現を避けます。人物写真は、本人の同意を得たものだけを使います。',
        '訂正: 誤りが見つかった場合は記事を修正し、記事末尾に訂正日と内容を記載します。黙って書き換えることはしません。',
        '画像の権利: 画像には撮影者またはライセンスを必ず記載します。',
      ],
    },
    languages: {
      heading: '言語について',
      paragraphs: [
        '記事はまず英語で書きます。日本語版とフランス語版は機械翻訳で作り、編集人が確認してから公開します。島の言葉であるシマオレ語とキブシ語にも、今後対応する予定です（Coming soon）。',
      ],
    },
  },
  fr: {
    lead: 'Mayotte Chronicles est un média en ligne consacré à Mayotte, département français de l’archipel des Comores, dans l’océan Indien.',
    mission: {
      heading: 'Notre mission',
      paragraphs: [
        'Mayotte possède l’un des plus grands lagons du monde, ainsi que ses propres langues et sa propre culture. Pourtant, on ne trouve presque rien à son sujet en japonais ou en anglais. Nous voulons y remédier, avec soin.',
      ],
      list: [
        'Raconter la culture, la nature, les habitants et la société de Mayotte, en donnant le contexte.',
        'Offrir aux lecteurs japonais et anglophones une première porte d’entrée fiable vers l’île.',
        'Apporter aux lecteurs francophones, et plus tard dans les langues de l’île, un regard extérieur.',
      ],
    },
    author: 'Auteur',
    editorial: {
      heading: 'Ligne éditoriale',
      paragraphs: [],
      list: [
        'Exactitude : les chiffres, les dates et les noms propres sont appuyés par des sources citées en fin d’article, en privilégiant les sources officielles et primaires.',
        'Respect : sur des sujets comme les migrations, les catastrophes ou la pauvreté, nous évitons toute formulation qui porterait atteinte à la dignité des personnes concernées. Les photos de personnes ne sont publiées qu’avec leur accord.',
        'Corrections : lorsqu’une erreur est constatée, nous corrigeons l’article et indiquons en fin d’article la date et la nature de la correction. Nous ne modifions jamais un article en silence.',
        'Droits des images : chaque image mentionne son auteur ou sa licence.',
      ],
    },
    languages: {
      heading: 'Langues',
      paragraphs: [
        'Les articles sont d’abord écrits en anglais. Les versions japonaise et française sont produites par traduction automatique, puis vérifiées par la rédaction avant publication. Le shimaoré et le kibushi, langues de l’île, arrivent bientôt (Coming soon).',
      ],
    },
  },
};

interface PrivacyContent {
  updated: string;
  intro: string;
  sections: Section[];
}

export const privacy: Record<PublicLang, PrivacyContent> = {
  en: {
    updated: 'Last updated: November 23, 2026',
    intro: 'This policy explains what personal data Mayotte Chronicles (https://daikiito-dk.github.io/Mayotte-Chronicles/) handles and why. The site is run by Daiki Ito.',
    sections: [
      {
        heading: 'Analytics (Google Analytics 4)',
        paragraphs: [
          'Only if you click “Accept” in the cookie banner, we load Google Analytics 4, provided by Google. It sets cookies (such as _ga) to measure which pages are read, how readers arrive at the site, and in which language. Google may process this data outside the European Union.',
          'If you decline, or until you make a choice, no analytics script is loaded and no analytics cookie is set. You can change your choice at any time with “Cookie settings” at the bottom of every page. Withdrawing consent removes the analytics cookies from this site.',
        ],
      },
      {
        heading: 'Your cookie choice',
        paragraphs: ['Your choice (accept or decline) is stored in your browser’s local storage so that we do not ask again on every page. It is not sent to us.'],
      },
      {
        heading: 'Contact form (Tally)',
        paragraphs: [
          'The contact form is provided by Tally, a company based in Belgium that stores form data in the European Union. When you send a message, we receive the name (optional), email address, subject, and message you enter. We use them only to reply to you, and we do not share them with anyone else.',
        ],
      },
      {
        heading: 'Hosting',
        paragraphs: ['The site is hosted on GitHub Pages. GitHub may record technical data such as IP addresses in its server logs to operate and secure the service.'],
      },
      {
        heading: 'Your rights',
        paragraphs: ['You can ask us to access, correct, or delete the personal data you sent us through the contact form. Please use the contact page to make a request.'],
      },
    ],
  },
  ja: {
    updated: '最終更新日: 2026年11月23日',
    intro: 'このポリシーでは、Mayotte Chronicles（https://daikiito-dk.github.io/Mayotte-Chronicles/）が扱う個人情報と、その目的を説明します。このサイトは Daiki Ito が運営しています。',
    sections: [
      {
        heading: 'アクセス解析（Google アナリティクス 4）',
        paragraphs: [
          'Cookie のバナーで「同意する」を選んだ場合に限り、Google が提供する Google アナリティクス 4 を読み込みます。どのページが読まれているか、読者がどこから来たか、どの言語で読まれているかを知るために、Cookie（_ga など）を保存します。Google は、このデータを欧州連合の外で処理することがあります。',
          '「同意しない」を選んだ場合や、まだ選んでいない間は、解析用のスクリプトを読み込まず、解析用の Cookie も保存しません。選択は、各ページ下部の「Cookie 設定」からいつでも変更できます。同意を取り消すと、このサイトの解析用 Cookie を削除します。',
        ],
      },
      {
        heading: 'Cookie の選択の保存',
        paragraphs: ['ページを移動するたびに確認しなくて済むように、選択（同意する／同意しない）をブラウザのローカルストレージに保存します。この情報がわたしたちに送られることはありません。'],
      },
      {
        heading: 'お問い合わせフォーム（Tally）',
        paragraphs: [
          'お問い合わせフォームには、ベルギーの企業 Tally のサービスを使っています。Tally はフォームのデータを欧州連合内に保存します。送信されたお名前（任意）、メールアドレス、件名、お問い合わせ内容は、返信のためだけに使い、ほかの誰とも共有しません。',
        ],
      },
      {
        heading: 'ホスティング',
        paragraphs: ['このサイトは GitHub Pages で公開しています。GitHub は、サービスの運営と安全のために、IP アドレスなどの技術的な情報をサーバーの記録に残すことがあります。'],
      },
      {
        heading: 'あなたの権利',
        paragraphs: ['お問い合わせフォームから送られた個人情報について、開示・訂正・削除を求めることができます。ご希望の場合は、お問い合わせページからご連絡ください。'],
      },
    ],
  },
  fr: {
    updated: 'Dernière mise à jour : 23 novembre 2026',
    intro: 'Cette politique explique quelles données personnelles Mayotte Chronicles (https://daikiito-dk.github.io/Mayotte-Chronicles/) traite et pourquoi. Le site est édité par Daiki Ito.',
    sections: [
      {
        heading: 'Mesure d’audience (Google Analytics 4)',
        paragraphs: [
          'Uniquement si vous cliquez sur « Accepter » dans le bandeau cookies, nous chargeons Google Analytics 4, fourni par Google. Ce service dépose des cookies (comme _ga) pour mesurer les pages lues, la provenance des lecteurs et la langue de lecture. Google peut traiter ces données en dehors de l’Union européenne.',
          'Si vous refusez, ou tant que vous n’avez pas fait de choix, aucun script de mesure n’est chargé et aucun cookie de mesure n’est déposé. Vous pouvez modifier votre choix à tout moment via « Paramètres des cookies » en bas de chaque page. Le retrait du consentement supprime les cookies de mesure de ce site.',
        ],
      },
      {
        heading: 'Enregistrement de votre choix',
        paragraphs: ['Votre choix (accepter ou refuser) est enregistré dans le stockage local de votre navigateur pour ne pas vous le redemander à chaque page. Il ne nous est pas transmis.'],
      },
      {
        heading: 'Formulaire de contact (Tally)',
        paragraphs: [
          'Le formulaire de contact est fourni par Tally, société établie en Belgique qui stocke les données des formulaires dans l’Union européenne. Lorsque vous envoyez un message, nous recevons le nom (facultatif), l’adresse e-mail, l’objet et le message saisis. Nous les utilisons uniquement pour vous répondre et ne les partageons avec personne.',
        ],
      },
      {
        heading: 'Hébergement',
        paragraphs: ['Le site est hébergé sur GitHub Pages. GitHub peut enregistrer des données techniques, comme les adresses IP, dans ses journaux de serveur pour faire fonctionner et sécuriser le service.'],
      },
      {
        heading: 'Vos droits',
        paragraphs: ['Vous pouvez demander l’accès, la rectification ou la suppression des données personnelles que vous nous avez envoyées via le formulaire de contact. Pour cela, utilisez la page Contact.'],
      },
    ],
  },
};
