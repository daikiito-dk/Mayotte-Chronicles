# 参考サイトの構造まとめ

- 調査日: 2026-11-24
- 調べ方: 各サイトのトップページ、ヘッダー・フッターのリンク、サイトマップ（`sitemap.xml`）、代表的な記事ページを確認しました。
- 位置づけ: 設計の参考資料です。仕様は [SPEC.md](../../SPEC.md) が正で、このファイルの内容は仕様ではありません。

| サイト | 運営 | 言語 | サイトマップ上の URL 数 |
| --- | --- | --- | --- |
| [Visit Faroe Islands](https://visitfaroeislands.com/) | フェロー諸島の公式観光局 | 英語・デンマーク語・ドイツ語・フェロー語 | 約 270（英語版） |
| [Discover Tasmania](https://www.discovertasmania.com.au/) | Tourism Tasmania（州政府） | 英語（オーストラリア）のみ | 約 4,400 |
| [Visit Isle of Man](https://www.visitisleofman.com/) | マン島政府 | 英語（イギリス）のみ | 約 2,700 |

---

## 1. Visit Faroe Islands

### 1.1 全体の特徴

- 規模が小さく、階層が深い構成です。メインのナビゲーションは 4 項目だけです。
- 写真が主役です。トップは大きな写真のスライダーから始まり、Instagram の投稿（`#visitfaroeislands`）を並べた枠もあります。
- 記事のあいだに、海外メディアの引用（Financial Times、The Spectator など）を挟んでいます。
- 外部の書き手との共同記事には「Guest article」と表示しています。

### 1.2 URL と多言語

- ルート（`/`）は `/en` へ移動します。
- すべてのページが言語コードで始まります: `/en`、`/dk`（デンマーク語）、`/de`、`/fo`。
- `hreflang` は `en` / `da` / `de` / `fo` と `x-default`（`/en`）を出力しています。URL は `/dk` なのに `hreflang` は `da` と、両者が一致していません。
- サイトマップは言語ごとに分かれています（`sitemap-en.xml`、`sitemap-dk.xml` など）。
- 言語切り替えはフッターにあります。

### 1.3 ナビゲーション（ヘッダー）

```
Visit Faroe Islands（ロゴ → /en）
├─ SEE & DO          /en/see-do
├─ PLAN YOUR STAY    /en/plan-your-stay
├─ WHAT'S ON         /en/whatson
│   ├─ Events        /en/whatson/events
│   ├─ Places        /en/whatson/places
│   └─ Hiking        /en/whatson/hiking
├─ ABOUT             /en/about-vfi
└─ Meetings          /en/meetings
```

### 1.4 階層（英語版サイトマップより、件数はページ数）

```
/en
├─ see-do（115）
│   ├─ inspiration-guides（55）  人気ガイド、旅行者のヒント、年間行事、探検のアイデア
│   ├─ activities（31）          ハイキング、アドベンチャースポーツ、海、観光名所
│   └─ cultural-experiences（28）芸術・建築、食、家庭訪問体験（Heim）、買い物
├─ plan-your-stay（68）
│   ├─ getting-here              飛行機、船
│   ├─ getting-around            公共交通、レンタカー、自転車
│   ├─ staying-here              ホテル、キャンプ、ゲストハウス
│   ├─ staying-safe              安全なハイキング、健康・安全、天気
│   ├─ get-ready-for-your-trip   基本情報、責任ある訪問、持ち物、地図、パンフレット
│   └─ need-a-little-help        地域の案内所、現地・海外の旅行会社
└─ about-vfi（88）
    ├─ people-society            人々、食、言語、スポーツ
    ├─ history-governance-and-economy  歴史、政治、経済、早わかりデータ
    ├─ nature                    地理、天気、動植物、オーロラ
    ├─ about-visit-faroe-islands 観光局について、持続可能性、プライバシー、Cookie
    └─ marketing-development-campaigns  キャンペーン（Sheep View 360 など）
```

### 1.5 トップページの並び

1. 写真スライダー（キャッチコピー、あいさつ「Góðan dag」）
2. 「Please Visit Responsibly」（責任ある訪問のお願い）
3. 特集ガイドのカード（ウェルネス、クリスマス、月別ガイド、雨の日、72 時間ガイドなど）
4. 実用情報のカード（安全、冬、ハイキング料金、イベント、出発前に知ること）
5. 行き方（飛行機・船）、宿泊、島内の移動、相談先
6. 海外メディアの引用
7. Instagram の写真

### 1.6 下層ページ・記事ページ

- 各セクションのトップは「導入文 → 子ページへのカード → 関連セクション（Related articles）」という同じ形です。
- 記事は「種類と書き手の表示 → 大見出し → リード文 → 日ごと・場所ごとの見出し」の順です。
- パンくずリストがあります。

### 1.7 フッター

- INFO: 連絡先、プレス・業界向け、ニュースレター、地域の案内所、旅行会社
- INSPIRATION: See & Do、Plan your Stay、What's On、About the Faroe Islands
- LEGAL: プライバシーポリシー
- 言語切り替え、SNS（Facebook、Instagram、X、Pinterest、LinkedIn）
- Cookie 同意: 「Accept all」「accept necessary」「Settings」の 3 つ。GA を使うことを明記しています。

---

## 2. Discover Tasmania

### 2.1 全体の特徴

- 大規模な観光ポータルです。ページの大半は、事業者の掲載ページ（ツアー、飲食、宿）です。
- 編集記事は「Unordinary Stories」（`/experiences/stories/`）にまとまっています（約 130 本）。
- 「地域」と「やること」の 2 つの軸で情報を整理し、記事から地域ページ・掲載ページへ相互にリンクしています。
- 会員登録、お気に入り、旅行プランナー、アプリなど、計画を手伝う機能が多くあります。
- 先住民（Palawa / タスマニア・アボリジニ）に関するページと、フッターの「Acknowledgement of Country」（土地への敬意の表明）があります。

### 2.2 URL と多言語

- 言語コードは URL に入りません（`/regions/...` のように直接始まる）。`html lang="en-AU"` で、`hreflang` は出力していません。
- サイトマップは `/en/sitemap.xml` にあります。
- 海外向けには、言語切り替えではなく国別のキャンペーンページ（例: `/singapore`）で対応しています。

### 2.3 ナビゲーション（ヘッダーのメガメニュー）

```
├─ Places to Go
│   ├─ Regions         7 地域（Hobart & South、East Coast、King Island など）
│   ├─ Cities & Towns  主な町
│   ├─ National Parks  主な国立公園
│   └─ Top places      人気スポット
├─ Things to Do        What's on、ロードトリップ、食、アウトドア、芸術・文化、
│                      自然・野生動物、ウェルネス、アボリジニ文化、ツアー
├─ Where to stay       ホテル、B&B、貸別荘、リゾート、アパート、ホステル、
│                      ファームステイ、キャンプ、モーテル
└─ Plan Your Trip      旅程例、天気・気候、緊急情報、島内の移動、案内所、
                       バリアフリー旅行、よくある質問、オフシーズン、
                       Unordinary Stories、旅行プランナー
```

ヘッダーにはサイト内検索と「人気の検索語」もあります。

### 2.4 階層（サイトマップより）

```
/
├─ things-to-do（2,699）  ツアー、飲食、自然、芸術・文化、祭り・イベント、歴史、
│                         アウトドア、買い物、旅程例（itineraries）、ロードトリップ、博物館 ほか
├─ accommodation（1,210） 宿の個別ページ（/accommodation/{宿名}/）
├─ experiences/stories（126）  編集記事
├─ regions（125）         /regions/{地域}/{町・スポット}/ の 2 階層
├─ hire（77）             レンタル事業者
├─ planning（41）         交通、天気、安全、案内所、FAQ
├─ off-season（28）       季節キャンペーン
└─ その他                 whats-on、explore（旅行プランナー）、contact、privacy-policy、
                          cookies-policy、copyright、editorial-team、our-photographers、mobile-app
```

`/editorial-team`（編集チーム）と `/our-photographers`（写真家）のページがあり、書き手と撮影者を明示しています。

### 2.5 トップページの並び

1. キャッチコピー「Come Down For Air」
2. テーマ別の動画リール（自然、食、ウェルネス、芸術、アドベンチャー）
3. キャンペーン枠（Not Really For Tourists）
4. 「Tassie Essentials」: 定番記事のカード（トップ 10、動物、歴史遺産、オーロラ、安全など）
5. 「What's on」: 開催中のイベント
6. 「Explore our regions」: 地域ごとの紹介文、代表的な町、旅程例へのリンク
7. よくある質問（見どころ、時期、移動、宿、天気）
8. アプリの案内

### 2.6 記事ページ・地域ページ

- 記事は「タイトル → リード文 → テーマごとの見出し」で進み、各見出しに「Where to spot them（どこで見られるか）」と「While you're in the area（近くの掲載事業者）」を付けています。
- 記事の最後に「You might also like（関連記事）」があります。
- 地域ページは「キャッチコピー → 見どころ（景色・動物・歩く・食）→ 訪れる場所 → 関連記事 → 掲載事業者」の順です。
- SNS 共有ボタン（Facebook、X、WhatsApp、Messenger、リンクのコピー）があります。

### 2.7 フッター

- 地域、やること、人気スポット、宿、イベント、計画の各リンク群
- ニュースレター登録、`#DiscoverTasmania`
- Acknowledgement of Country
- Our Commitment、Disclaimer、Privacy、Contact Us

---

## 3. Visit Isle of Man

### 3.1 全体の特徴

- 観光 CMS（Simpleview）で作られた、予約と事業者情報が中心のサイトです。
- メインのナビゲーションに 3 階層のドロップダウンがあり、「目的別（犬連れ、家族、徒歩、バイクなど）」の分類が細かく分かれています。
- 編集記事は「Blog」（約 65 本）にまとまっていて、カテゴリと月別のアーカイブがあります。
- 観光事業者向け（`/trade`）と旅行会社向け（`/traveltrade`）のページが、サイトマップの半分以上を占めています。
- ヘッダーに新型コロナの古い案内（2021 年の資料）が残っています。

### 3.2 URL と多言語

- 英語のみ（`html lang="en-GB"`）で、言語コードは URL に入りません。`hreflang` はありません。
- 2026 年が「マン島語の年（Year of the Manx Language 2026）」で、専用ページがあります。ただしサイト自体はマン島語に対応していません。

### 3.3 ナビゲーション（ヘッダー）

```
├─ Accommodation        ホテル、B&B、貸別荘、アパート、バリアフリー、キャンプ・グランピング、
│                       目的別の宿（犬・家族・徒歩・バイク・自転車・星空・団体・車）、
│                       個性的な宿（高級・変わり種・伝統的・受賞・パブ・ホステル・農家）
├─ See & Do             アクティブ、文化・歴史遺産、自然・野生動物、ウェルビーイング、家族、
│                       通年（買い物・娯楽）、ツアー、ドライブ・モータースポーツ
├─ What's On            展示、家族向け、祭り・ショー、モータースポーツ、伝統・文化
├─ Food & Drink         飲食店（レストラン・パブ・カフェ）、食の体験（市場・ツアー・料理教室・
│                       イベント）、目的別の飲食店
├─ Offers               割引・パッケージ
├─ Visitor Information  パンフレット、交通（行き方・島内の移動・旅行会社・犬連れ・キャンピングカー）、
│                       案内所、役立つ情報
├─ Suggested Itineraries
├─ Island Map
├─ Itinerary Planner
└─ Blog
```

### 3.4 階層（サイトマップより）

```
/
├─ trade（1,012）          事業者向け: 情報、事業支援、マーケティング、調査、団体概要
├─ accommodation（453）    宿の一覧と個別ページ
├─ experience（390）       事業者・スポットの個別ページ
├─ traveltrade（359）      旅行会社向け: 事業者一覧、ニュース、資料、クルーズ、会議
├─ food-and-drink（128）
├─ see-and-do（72）
├─ blog（66）              /blog/read/{記事}、/blog/{カテゴリ}、/blog/{年}/{月}
├─ whats-on（64）
├─ information（48）       連絡先、Cookie、プライバシー、サイトマップ、ニュースレター、
│                          イベント投稿、パンフレット請求
├─ visitor-information（27）
├─ inspiration（19）       季節（春夏秋冬）、休暇、旅程例
└─ キャンペーン            unesco-biosphere、isle-of-man-tt、year-of-the-manx-language-2026 など
```

### 3.5 トップページの並び

1. メイン写真とキャッチコピー「This is our... Extraordinary Isle.」、島の紹介文
2. クリックできる島の地図
3. 3 つの予約導線: 宿、交通、パッケージ
4. 「Begin, your story」: 特集カード（割引、イベント、見どころ、ブログ）
5. 「Your extraordinary seasons」: 季節ごとの紹介（春夏秋冬）
6. 検索フォーム（宿・やること・イベント・飲食を、地域・種類・日付で検索）
7. Instagram（`#IOMSTORY`）、ニュースレター登録

### 3.6 ブログ

- カテゴリ: 宿、アクティブ、文化・歴史遺産、家族、食、自然、アウトドア、季節、ウェルネス、野生動物 など
- 月別アーカイブ（`/blog/2026/09` など）

### 3.7 フッター

- アクセシビリティ方針、プライバシー、Cookie、お問い合わせ、サイトマップ、利用規約
- イベントの投稿、パンフレットのダウンロード
- SNS（Facebook、Instagram、X、YouTube）

---

## 4. 3 サイトの比較

| 項目 | Faroe Islands | Tasmania | Isle of Man |
| --- | --- | --- | --- |
| 中心になる情報 | 編集されたガイドと基礎知識 | 地域と事業者の掲載、編集記事 | 予約と事業者の掲載 |
| 第 1 階層の数 | 4（See & Do / Plan / What's On / About） | 4（Places / Things / Stay / Plan） | 10 |
| 整理の軸 | 目的（見る・計画する・知る） | 地域 × やること | 目的 × 対象者 |
| 島の基礎知識 | About に独立（人・歴史・自然） | FAQ と記事に分散 | ほぼない |
| 編集記事の場所 | See & Do の Guides | Unordinary Stories | Blog |
| 多言語 | 4 言語、URL に言語コード、`hreflang` あり | 英語のみ | 英語のみ |
| 行き方の情報 | Plan your stay の最上位 | Plan Your Trip | Visitor Information |
| 責任ある訪問・安全 | トップの先頭に掲載 | 安全ガイド、緊急情報 | 古いコロナ案内のみ |
| 書き手の明示 | Guest article の表示 | 編集チーム・写真家のページ | なし |
| 検索 | なし（目立つ位置には） | ヘッダーに常設 | 種類別の検索フォーム |

## 5. Mayotte Chronicles への示唆

SPEC.md の方針（雑誌風、少人数運営、5 言語、出典重視）に照らして、参考になる点をまとめます。採用するときは、先に SPEC.md を更新します。

1. **第 1 階層は少なく保つ**: Faroe と Tasmania はどちらも 4 項目です。SPEC の 7 カテゴリをそのままヘッダーに並べると多めなので、グループにまとめるか、モバイルでの表示を検討する余地があります。
2. **基礎知識を独立させる**: Faroe の About（人・社会、歴史・政治・経済、自然）は、SPEC の「解説（explainer）」と「入門枠」に近い考え方です。特に「早わかりデータ（quick facts）」の形は、マヨットの基礎情報ページの参考になります。
3. **多言語の URL 設計は Faroe が近い**: 言語コードで始まる URL、`x-default`、言語ごとのサイトマップ、ルートからの移動は、SPEC 3.2 の方針と一致しています。Faroe のように URL の言語コード（`dk`）と `hreflang`（`da`）がずれないよう、SPEC では同じコードを使う方針を保ちます。
4. **記事の型をそろえる**: Faroe の「種類と書き手の表示 → リード文 → 見出し」と、Tasmania の「関連記事」「近くの情報」は、SPEC 4.2 の記事ページ要素（カテゴリ、リード文、関連記事）と相性がよいです。
5. **行き方・安全・責任ある訪問を目立たせる**: 3 サイトとも行き方を上位に置いています。最初の記事「マヨットへの行き方」は入門枠の先頭候補です。Faroe の「Please Visit Responsibly」は、SPEC 2.4 の「配慮」の方針を読者向けに伝える参考になります。
6. **書き手と撮影者を明示する**: Tasmania の編集チーム・写真家のページは、SPEC 2.4 の画像の権利と 2.5 の著者情報の見せ方の参考になります。
7. **先住の文化と言葉への敬意**: Tasmania の Acknowledgement of Country や、マン島の「マン島語の年」は、シマオレ語・キブシ語の扱い（SPEC 3.1、3.4）を考えるうえでの参考になります。
8. **まねしない点**: 予約、会員登録、旅行プランナー、事業者の掲載、事業者向けページは、SPEC 1.5 の「しないこと」と規模に合いません。マン島の古いコロナ案内のように、変わりやすい情報が古いまま残る問題は、SPEC 9.2 の「情報の確認日」で防ぎます。
