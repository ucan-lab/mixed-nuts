# デザイン工房-ウェブデザイナ向け開発環境-

デザイン工房はウェブデザイナがHTMLやCSSを効率よく書くための開発環境です。

## ポイント

- HTMLテンプレートエンジンは [EJS](http://ejs.co) を採用
  - 素のHTMLもそのまま記述可能
- CSSメタ言語は [Sass(Scss記法)](http://sass-lang.com) を採用
  - 素のCSSもそのまま記述可能
- 自動ビルド＆自動ブラウザリロードによる快適かつ爆速なコーディング環境を提供
- Laravel Mixをベースに Bootstrap3/Font Awesome/Vue.js/Jquery/lodash などの便利なライブラリを利用可能
- [Laravel Mix Purgecss](https://github.com/spatie/laravel-mix-purgecss) により未使用のCSSを除去し、より小さいCSSファイルをリリース
- [Netlify](https://www.netlify.com) でデプロイをお手軽に

## 要件

- [Git](https://git-scm.com)
- [Nodejs(npm)](https://nodejs.org/ja)
- [Netlifyアカウント](https://www.netlify.com)
  - 無料で使える高機能ホスティングサービス
  - GitHubアカウントがあれば連携可能

## 開発環境構築

### インストール

```
$ git clone https://github.com/ucan-lab/design-studio ./example
$ cd example
$ npm install
```

### Git初期化

```
$ rm -rf .git
$ git init
$ git add .
$ git commit -m "first commit"
```

## ビルド

### ビルド(通常)

```
$ npm run dev
```

### ビルド(監視モード)

```
$ npm run watch
$ npm run gulp
```

アセットの自動ビルド、ブラウザの自動リロードモードです。<br>
それぞれ別窓でコマンドを実行してください。

### ビルド(最適化)

```
$ npm run prod
```

css, javascriptファイルが最適化されます。

## デプロイ(手動)

高機能ホスティングサービス [Netlify](https://www.netlify.com) を使って簡単にデプロイ＆公開できます。

```
$ npm run dep

? No site id specified, create a new site: Yes
? Path to deploy? (current dir): public
```

初回デプロイ実行時はユーザー登録＆認証確認、サイト作成＆公開ディレクトリ設定が行われます。<br>
基本的に無料で使用できます。また有料になりますがアクセスコントロールでパスワード制限をかけることも可能です。<br>
詳細なサイト設定は [netlify公式ドキュメント](https://www.netlify.com/docs) を参照ください。

## 補足等

[https://github.com/ucan-lab/design-studio/wiki](https://github.com/ucan-lab/design-studio/wiki)
