# Mayotte Chronicles

Mayotte（マヨット）に特化した、日本語・フランス語・英語のウェブメディアです。島の言葉（シマオレ語・キブシ語）にも順次対応します。

- 仕様・方針: [SPEC.md](./SPEC.md)
- 公開 URL: https://daikiito-dk.github.io/Mayotte-Chronicles/
- 状態: サイト公開済み。最初の記事 3 本はレビュー中（下書き）

## 開発

Node.js 22.12 以上が必要です。

```sh
npm ci
npm run dev      # http://localhost:4321/Mayotte-Chronicles/ （下書きの記事も表示されます）
npm run verify   # 型チェック、ビルド、内部リンクの確認
```

- 記事: `content/articles/{lang}/{translationKey}.md`（項目は SPEC.md の 5.3）
- 仮画像の作り直し: `npm run placeholder`
- `main` に push すると GitHub Actions がビルドして GitHub Pages に公開します。`draft: true` の記事は本番には出ません。
