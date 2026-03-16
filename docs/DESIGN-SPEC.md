# Design Specification

Growth Commit コーポレートサイト デザイン仕様書

---

## 1. デザインコンセプト

### ブランドとの接続

| 要素 | 内容 |
|------|------|
| ブランドコンセプト | Effortless Transformation |
| キーワード | 組織の複雑性を圧縮する / 組織の摩擦を減らす |
| デザイン思想 | **Compressed Clarity** ― 複雑さを削ぎ落とし、本質だけを残す |

### デザイン原則

1. **Reduction（削減）**: 装飾を排し、必要な情報だけを提示する
2. **Precision（精緻）**: 細部まで意図のあるデザイン。偶然の要素を排除
3. **Confidence（自信）**: 過剰な説明をせず、静かに実力を示す
4. **Movement（動き）**: 静的ではなく、変革の動きを感じさせる

---

## 2. 参照サイト分析

### AREA 17（area17.com）

| 特徴 | 採用要素 |
|------|----------|
| 洗練されたミニマリズム | ホワイトスペースの使い方 |
| ニュートラルカラーパレット | プロフェッショナル感 |
| クライアントロゴの見せ方 | 信頼性の演出方法 |
| 抑制された表現 | 「語りすぎない」トーン |

### Work & Co（work.co）

| 特徴 | 採用要素 |
|------|----------|
| 大胆なタイポグラフィ | ヘッドラインの存在感 |
| カードベースレイアウト | 事例・サービスの整理 |
| フルワイドヒーロー | ファーストビューのインパクト |
| クライアントワーク中心 | 実績を語らせる構成 |

### ustwo（ustwo.com）

| 特徴 | 採用要素 |
|------|----------|
| アクセントカラーの戦略的使用 | 視線誘導・CTA強調 |
| 12カラムグリッド | レスポンシブ設計 |
| スムーズなトランジション | 洗練されたインタラクション |
| Editorial aesthetic | コンテンツの読みやすさ |

---

## 3. カラーパレット

### Primary Colors

```css
:root {
  /* Base */
  --color-white: #FFFFFF;
  --color-black: #1A1A1A;

  /* Gray Scale */
  --color-gray-50: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #E5E5E5;
  --color-gray-300: #D4D4D4;
  --color-gray-400: #A3A3A3;
  --color-gray-500: #737373;
  --color-gray-600: #525252;
  --color-gray-700: #404040;
  --color-gray-800: #262626;
  --color-gray-900: #171717;
}
```

### Accent Colors

```css
:root {
  /* Primary Accent - 知性・信頼 */
  --color-accent-primary: #2563EB;      /* Blue 600 */
  --color-accent-primary-light: #3B82F6; /* Blue 500 */
  --color-accent-primary-dark: #1D4ED8;  /* Blue 700 */

  /* Secondary Accent - 変革・エネルギー（控えめに使用） */
  --color-accent-secondary: #10B981;     /* Emerald 500 */
}
```

### Semantic Colors

```css
:root {
  /* Background */
  --bg-primary: var(--color-white);
  --bg-secondary: var(--color-gray-50);
  --bg-inverse: var(--color-black);

  /* Text */
  --text-primary: var(--color-gray-900);
  --text-secondary: var(--color-gray-600);
  --text-tertiary: var(--color-gray-400);
  --text-inverse: var(--color-white);

  /* Border */
  --border-light: var(--color-gray-200);
  --border-default: var(--color-gray-300);
}
```

### カラー使用ルール

| 用途 | カラー | 備考 |
|------|--------|------|
| 背景（メイン） | White / Gray-50 | セクション交互に使用 |
| 背景（強調） | Black | Hero、Final CTA |
| 本文テキスト | Gray-900 | 高コントラスト |
| 補足テキスト | Gray-600 | サブコピー、説明文 |
| CTA ボタン | Accent Primary | サイト内で最も目立つ色 |
| ホバー状態 | Accent Primary Dark | 明確なフィードバック |

---

## 4. タイポグラフィ

### フォントファミリー

```css
:root {
  /* 日本語 + 英語 */
  --font-sans: "Noto Sans JP", "Inter", -apple-system, BlinkMacSystemFont, sans-serif;

  /* 英語ヘッドライン（Effortless Transformation 用） */
  --font-display: "Inter", "Noto Sans JP", sans-serif;

  /* 等幅（コード、数値） */
  --font-mono: "JetBrains Mono", "Noto Sans JP", monospace;
}
```

### タイプスケール

```css
:root {
  /* Display - Hero キャッチコピー */
  --text-display: clamp(2.5rem, 5vw, 4rem);      /* 40-64px */

  /* Headline */
  --text-h1: clamp(2rem, 4vw, 3rem);             /* 32-48px */
  --text-h2: clamp(1.5rem, 3vw, 2.25rem);        /* 24-36px */
  --text-h3: clamp(1.25rem, 2vw, 1.5rem);        /* 20-24px */
  --text-h4: 1.125rem;                            /* 18px */

  /* Body */
  --text-body-lg: 1.125rem;                       /* 18px */
  --text-body: 1rem;                              /* 16px */
  --text-body-sm: 0.875rem;                       /* 14px */

  /* Caption / Label */
  --text-caption: 0.75rem;                        /* 12px */
  --text-label: 0.875rem;                         /* 14px */

  /* Line Height */
  --leading-tight: 1.25;
  --leading-normal: 1.6;
  --leading-relaxed: 1.8;

  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
}
```

### タイポグラフィ使用ルール

| 要素 | サイズ | ウェイト | 行間 | 字間 |
|------|--------|----------|------|------|
| Hero タグライン（EN） | display | 500 | tight | tight |
| Hero キャッチコピー | display | 700 | tight | tight |
| セクションタイトル | h2 | 700 | tight | normal |
| サービス名 | h3 | 600 | tight | normal |
| 本文 | body | 400 | relaxed | normal |
| 補足テキスト | body-sm | 400 | normal | normal |
| ボタン | label | 500 | normal | wide |

---

## 5. レイアウト & グリッド

### グリッドシステム

```css
:root {
  /* Container */
  --container-max: 1280px;
  --container-padding: clamp(1rem, 5vw, 4rem);

  /* Grid */
  --grid-columns: 12;
  --grid-gap: clamp(1rem, 2vw, 2rem);

  /* Section Spacing */
  --section-gap: clamp(4rem, 10vw, 8rem);
  --section-padding-y: clamp(3rem, 8vw, 6rem);
}
```

### ブレークポイント

```css
/* Mobile First */
--bp-sm: 640px;   /* Small tablets */
--bp-md: 768px;   /* Tablets */
--bp-lg: 1024px;  /* Desktop */
--bp-xl: 1280px;  /* Large desktop */
```

### レイアウトパターン

| パターン | 用途 | カラム構成 |
|----------|------|------------|
| Full Width | Hero, CTA | 12col |
| Content | テキストセクション | 8col center |
| Split | Problem/Solution | 6col + 6col |
| Blocks | Services, Cases, Strengths | 6col × 2 / 12col stacked |
| Asymmetric | About（人物） | 5col + 7col |

### ペライチ設計方針

**カードではなくブロック**

ペライチ（1ページ完結）構成のため、「詳細ページへ遷移するカード」ではなく「ページ内で完結するコンテンツブロック」として設計する。

| NG | OK |
|----|-----|
| クリックを促すホバーエフェクト | 情報を読ませるレイアウト |
| 「詳しく見る」リンク | ブロック内で情報完結 |
| 小さなサムネイル+タイトルのみ | 十分な説明テキストを含む |
| 3カラム以上の細かいカード | 2カラム or 1カラムの読みやすいブロック |

---

## 6. コンポーネント

### Button

```css
.button-primary {
  background: var(--color-accent-primary);
  color: var(--text-inverse);
  padding: 1rem 2rem;
  border-radius: 0;  /* シャープなエッジ */
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  transition: all 0.2s ease-out;
}

.button-primary:hover {
  background: var(--color-accent-primary-dark);
  transform: translateY(-2px);
}
```

| バリエーション | 用途 | スタイル |
|----------------|------|----------|
| Primary | メインCTA | 塗りつぶし + Blue |
| Secondary | サブCTA | 枠線 + Black |
| Ghost | テキストリンク | 下線のみ |

### Content Block

ペライチ構成のため、クリック誘導のカードではなく、情報を読ませるブロックとして設計。

```css
.content-block {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  padding: 2rem 2.5rem;
}

/* ホバーエフェクトなし - 遷移先がないため */
/* 代わりに視認性と可読性を重視 */

.content-block--alt {
  background: var(--bg-secondary);
  border: none;
}
```

| バリエーション | 用途 | スタイル |
|----------------|------|----------|
| Default | Services, Strengths | 白背景 + ボーダー |
| Alt | Cases | グレー背景、ボーダーなし |
| Numbered | Services | 左上にナンバリング（01, 02） |

### Section Header

```css
.section-header {
  margin-bottom: var(--section-padding-y);
}

.section-label {
  font-size: var(--text-caption);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: var(--text-h2);
  font-weight: 700;
  color: var(--text-primary);
}
```

---

## 7. アニメーション & インタラクション

### Easing

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### Transition Duration

| 要素 | 時間 | 用途 |
|------|------|------|
| Micro | 150ms | ボタンホバー、色変化 |
| Default | 300ms | カード、要素の移動 |
| Slow | 500ms | セクション遷移、フェードイン |

### Scroll Animation

```css
/* Fade In Up */
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s var(--ease-out),
              transform 0.6s var(--ease-out);
}

.animate-fade-in-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### アニメーション原則

1. **Purposeful**: 意味のある動きのみ。装飾的アニメーションは排除
2. **Subtle**: 過度なアニメーションは避ける。気づくか気づかないか程度
3. **Consistent**: サイト全体で統一されたイージングとタイミング
4. **Accessible**: `prefers-reduced-motion` を尊重

---

## 8. 画像 & メディア

### 画像スタイル

| 用途 | スタイル | 備考 |
|------|----------|------|
| 人物写真 | モノクロ or デサチュレート | 統一感を出す |
| アイコン | ラインアイコン（1.5px stroke） | Lucide / Phosphor 系 |
| イラスト | 使用しない | 写真・図解で代替 |
| 背景 | 単色 or 微細グラデーション | 主張しすぎない |

### アスペクト比

```css
.aspect-hero { aspect-ratio: 16 / 9; }
.aspect-card { aspect-ratio: 4 / 3; }
.aspect-portrait { aspect-ratio: 3 / 4; }
.aspect-square { aspect-ratio: 1 / 1; }
```

---

## 9. セクション別デザイン

### Hero

```
┌─────────────────────────────────────────────────────────┐
│  [Background: Black or Deep Blue Gradient]              │
│                                                         │
│         Effortless Transformation                       │
│         [Caption - White 60% opacity]                   │
│                                                         │
│     組織の複雑性を、圧縮する。                            │
│     [Display - White - Bold]                            │
│                                                         │
│     意思決定と実行の無駄を減らし、                        │
│     変革を前進させます。                                 │
│     [Body - White 80% opacity]                          │
│                                                         │
│              [ 相談する ]                               │
│              [Button Primary]                           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Problem / Solution

```
┌──────────────────────────────────────────────────────────┐
│  [Background: Gray-50]                                   │
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐        │
│  │  Problem            │  │  Solution           │        │
│  │                     │  │                     │        │
│  │  • 課題1            │  │  → 解決後の状態1    │        │
│  │  • 課題2            │  │  → 解決後の状態2    │        │
│  │  • 課題3            │  │  → 解決後の状態3    │        │
│  │                     │  │                     │        │
│  │  [Muted colors]     │  │  [Accent colors]    │        │
│  └─────────────────────┘  └─────────────────────┘        │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Services

ページ内で情報が完結するコンテンツブロック。クリック誘導なし。

```
┌──────────────────────────────────────────────────────────┐
│  [Background: White]                                     │
│                                                          │
│  SERVICES                                                │
│  サービス                                                │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐ │
│  │  01                                                 │ │
│  │  戦略PMO支援                                         │ │
│  │  ────────────────────────────────────────────────   │ │
│  │  複雑な変革テーマを、意思決定と実行の両面から前進させる │ │
│  │                                                     │ │
│  │  ┌─────────────────┐  ┌─────────────────┐           │ │
│  │  │ 対象となる課題   │  │ 提供価値        │           │ │
│  │  │ • ...           │  │ • ...           │           │ │
│  │  │ • ...           │  │ • ...           │           │ │
│  │  │ • ...           │  │ • ...           │           │ │
│  │  └─────────────────┘  └─────────────────┘           │ │
│  │                                                     │ │
│  │  [Content Block - 情報完結型、リンクなし]             │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐ │
│  │  02                                                 │ │
│  │  AI活用支援                                          │ │
│  │  （同様の構成）                                       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**ブロック内構成**
- ナンバリング（01, 02）で視覚的区切り
- サービス名 + 一言説明（H3レベル）
- 2カラム：対象課題 | 提供価値
- 十分な余白で可読性確保
- ホバーエフェクトなし（遷移先がないため）

### Strengths

情報を読ませるブロック。クリック誘導なし。

```
┌──────────────────────────────────────────────────────────┐
│  [Background: Gray-50]                                   │
│                                                          │
│  STRENGTHS                                               │
│  私たちの強み                                             │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  強み1                                              │  │
│  │  戦略提言でも、プロジェクト推進でもない              │  │
│  │  ─────────────────────────────────────────────     │  │
│  │  構想の具体化から、意思決定の設計、                  │  │
│  │  複雑な実行体制の構築まで一貫して伴走               │  │
│  │  [Content Block - Full Width]                       │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  強み2（同様の構成）                                │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  強み3（同様の構成）                                │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**ブロック内構成**
- 見出し（強みの要約）+ 説明文
- 縦積みレイアウト（横並びカードではなく）
- 十分な余白で読みやすさ確保

### Cases

実績の概要ブロック。詳細ページへのリンクなし。

```
┌──────────────────────────────────────────────────────────┐
│  [Background: White]                                     │
│                                                          │
│  CASES                                                   │
│  支援実績                                                │
│                                                          │
│  支援実績: X社以上 / プロジェクト数: Y件以上              │
│  [Summary - Gray-600]                                    │
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐        │
│  │  教育                │  │  SIer               │        │
│  │  AIエージェント開発PMO│  │  AIツール群開発     │        │
│  │  ─────────────────  │  │  ─────────────────  │        │
│  │  概要テキスト...     │  │  概要テキスト...     │        │
│  │                     │  │                     │        │
│  │  [Block - Alt style]│  │  [Block - Alt style]│        │
│  └─────────────────────┘  └─────────────────────┘        │
│                                                          │
│  ┌─────────────────────────────────────────────────┐     │
│  │  IT / プロダクト開発人材育成                     │     │
│  │  （同様の構成）                                  │     │
│  └─────────────────────────────────────────────────┘     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**ブロック内構成**
- 業界ラベル + テーマ（見出し）
- 概要テキスト（2-3行）
- 「詳しく見る」リンクなし（ペライチのため）
- Alt スタイル（グレー背景）で区切り

### About

メンバー情報 + 会社情報。情報完結型。

```
┌──────────────────────────────────────────────────────────┐
│  [Background: Gray-50]                                   │
│                                                          │
│  ABOUT                                                   │
│  私たちについて                                           │
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐        │
│  │  [Photo]            │  │  [Photo]            │        │
│  │  山崎 亮             │  │  小川 芳充           │        │
│  │  代表取締役          │  │  Tech Lead          │        │
│  │  ─────────────────  │  │  ─────────────────  │        │
│  │  経歴テキスト...     │  │  経歴テキスト...     │        │
│  │  専門領域: ...       │  │  専門領域: ...       │        │
│  └─────────────────────┘  └─────────────────────┘        │
│                                                          │
│  ──────────────────────────────────────────────────      │
│                                                          │
│  会社名: 株式会社グロースコミット                          │
│  所在地: 東京都渋谷区神宮前六丁目23番4号 2F                │
│  事業内容: 戦略PMO支援 / AI活用支援                       │
│  [Company Info - Simple list]                            │
│                                                          │
│  Mission:                                                │
│  限られた人材が、本来向き合うべき                         │
│  高付加価値業務に集中できる状態をつくる                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### CTA Section

```
┌──────────────────────────────────────────────────────────┐
│  [Background: Black]                                     │
│                                                          │
│     組織の複雑性を、一緒に圧縮しませんか。                │
│     [H2 - White]                                         │
│                                                          │
│     課題の整理からお手伝いします。                        │
│     [Body - White 70%]                                   │
│                                                          │
│              [ 相談する ]                                │
│              [Button - White bg, Black text]             │
│                                                          │
│     相談は無料です / 1営業日以内にご返信します            │
│     [Caption - White 50%]                                │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 10. レスポンシブ設計

### Mobile（< 768px）

- 1カラムレイアウト
- タッチターゲット最小 44px
- ナビゲーションはハンバーガーメニュー
- Hero テキストサイズ縮小（clamp で自動調整）
- カードは縦積み

### Tablet（768px - 1024px）

- 2カラムレイアウト（Services, Cases）
- ナビゲーション表示
- 左右パディング増加

### Desktop（> 1024px）

- フルグリッド（12カラム）
- 最大幅 1280px + センタリング
- ホバーインタラクション有効

---

## 11. アクセシビリティ

### カラーコントラスト

- テキスト: 最低 4.5:1（WCAG AA）
- 大きなテキスト: 最低 3:1
- インタラクティブ要素: 最低 3:1

### キーボード操作

- すべてのインタラクティブ要素にフォーカス状態
- Tab 順序の論理性
- Skip to content リンク

### スクリーンリーダー

- セマンティック HTML
- 適切な見出し階層
- 画像の alt テキスト
- ARIA ラベル（必要な場合のみ）

### モーション

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 12. 技術スタック

### 採用技術

| 領域 | 技術 | 備考 |
|------|------|------|
| Framework | **Next.js (App Router)** | React Server Components、SSG/SSR対応 |
| Styling | **Tailwind CSS** | ユーティリティファースト、デザイントークンとの親和性 |
| Animation | **Framer Motion** | 宣言的アニメーション、scroll-triggered animations |
| Icons | **Lucide** | 軽量、一貫したデザイン、Tree-shaking対応 |
| Deploy | **Vercel** | Next.js最適化、Edge Functions、Analytics |
| Font | Google Fonts | Noto Sans JP + Inter |

### Next.js 構成

```
app/
├── layout.tsx          # Root layout（フォント、メタデータ）
├── page.tsx            # トップページ（ペライチ）
├── contact/
│   └── page.tsx        # お問い合わせフォーム
├── globals.css         # Tailwind directives + CSS variables
└── components/
    ├── sections/       # Hero, Problem, Solution, Services...
    ├── ui/             # Button, Card, SectionHeader...
    └── layout/         # Header, Footer
```

### Tailwind 設定

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: {
          primary: '#2563EB',
          'primary-light': '#3B82F6',
          'primary-dark': '#1D4ED8',
          secondary: '#10B981',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'var(--font-inter)', 'sans-serif'],
        display: ['var(--font-inter)', 'var(--font-noto-sans-jp)', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1' }],
      },
    },
  },
}
```

### Framer Motion パターン

```tsx
// Scroll-triggered fade in
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

// Usage
<motion.div {...fadeInUp}>
  <SectionContent />
</motion.div>
```

### パフォーマンス目標

| 指標 | 目標値 |
|------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| PageSpeed Score | > 90 |

---

## 13. 参照ドキュメント

- [top-page.md](../content/page-briefs/top-page.md) - トップページ情報設計
- [website-structure.md](./website-structure.md) - サイト構成
- [company-overview.md](../../AI-Agent-System/agents/common/knowledge/brand/company-overview.md) - ブランド定義

---

## 更新履歴

| 日付 | 変更内容 |
|------|----------|
| {YYYY-MM-DD} | 初版作成。AREA 17, Work & Co, ustwo を参照 |
