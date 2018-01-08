# デザイン工房-ウェブデザイナ向け開発環境-

デザイン工房はウェブデザイナがHTMLやCSSを効率よく書くための開発環境です。

## ポイント

- HTMLテンプレートエンジンは [EJS](http://ejs.co) を採用
  - 素のHTMLもそのまま記述可能
- CSSメタ言語は [Sass(Scss記法)](http://sass-lang.com) を採用
  - 素のCSSもそのまま記述可能
- 自動ビルド＆自動ブラウザリロードによる快適かつ爆速なコーディング環境を提供
- Laravel Mixをベースに Bootstrap3/Font Awesome/Vue.js/Jquery/lodash などの便利なライブラリを利用可能
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

```
$ npm run dev
```

## ビルド(監視モード)

```
$ npm run watch
$ npm run gulp
```

それぞれ別窓でコマンドを実行してください。

## ビルド(最適化)

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

## 補足

### Bootstrap3

- [https://getbootstrap.com](https://getbootstrap.com)
- [Bootstrap3日本語リファレンス](http://bootstrap3.cyberlab.info)
- [Bootstrap3チュートリアル](https://www.w3schools.com/bootstrap)

HTML、CSS、Javascriptからなる人気のCSSフレームワークです。

### Font-Awesome

- [http://fontawesome.io](http://fontawesome.io)

アイコンを文字として扱うことを可能にしたウェブフォントアイコンです。

### Vue.js

- [https://jp.vuejs.org](https://jp.vuejs.org)

シンプルなJavaScriptフレームワークです。

### jQuery

- [https://jquery.com](https://jquery.com)

jQueryは、高速で機能が充実したJavaScriptライブラリです。

### lodash

- [https://lodash.com](https://lodash.com)

lodashとは、JavaScriptのための便利なメソッドが詰まったライブラリです。

### axios

- [https://github.com/axios/axios](https://github.com/axios/axios)

axiosとは、ブラウザや node.js で動く Promise ベースのHTTPクライアントです。

### Sass(Scss)

- [http://sass-lang.com](http://sass-lang.com)
- [SCSS 文法](https://qiita.com/_upto_me_/items/ccb6edd249175c6b2d0a)

Sass(Scss)はCSSメタ言語(プリプロセッサ)です。
@import, @extend, @mixin, ネスト(入れ子), 変数などCSSより柔軟なコーディングが可能です。CSSをそのまま記述することもできるため学習コストは低いです。

### Laravel Mix

- [https://github.com/JeffreyWay/laravel-mix](https://github.com/JeffreyWay/laravel-mix)

javascript, css(scss)のコンパイルを行います。

### Gulp

- [https://gulpjs.com](https://gulpjs.com)

Gulpはタスク自動化ツールで開発時に便利な機能がたくさん提供されています。
コンパイルはLaravel Mixで行っているのでこちらではEJSとbroserSyncを利用するために利用します。

### EJS

- [http://ejs.co](http://ejs.co)

EJSはJavascriptの軽量テンプレートエンジンです。
HTMLファイルを利用してもいいのですが、共通部分(headerやfooter)をまとめておきたい、繰り返し要素をコピペするとメンテナンス性が低い、動的な値を入れるような書き方をしたい、などの要求をかなえるためにEJSを使用しています。また、HTMLをそのまま書くこともできるため学習コストが低いです。

### Browsersync

- [https://www.browsersync.io](https://www.browsersync.io)

ソースコードの変更を検知してブラウザを自動でリフレッシュする機能を提供します。

### Editorconfig

- [http://editorconfig.org](http://editorconfig.org)
- [.editorconfig の書き方](https://qiita.com/inabe49/items/d81fed3cf58ad751d915)
