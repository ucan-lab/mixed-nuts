# デザイン工房-ウェブデザイナ向け開発環境-

デザイン工房はウェブデザイナが効率よくHTMLを書くための開発環境です。
テンプレートエンジン「EJS」、CSSメタ言語「Scss」で低コストかつ保守的なコーディング
自動ビルド＆自動リロードによる快適かつ爆速なコーディング環境で開発できます。

また、Laravel Mixがベースとなっているため Bootstrap3/Font Awesome/Vue.js/Jquery/lodash/axios などの便利なライブラリをそのまま利用可能です。

## 要件

- Git
- Nodejs(npm)

```
$ git --version
git version 2.15.1
$ node -v
v8.6.0
$ npm -v
5.6.0
```

バージョンに差異があっても構わないです。

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
$ npm run watch
$ npm run gulp
```

それぞれ別窓でコマンドを実行してください。

## 最適化

```
$ npm run prod
```

css, javascriptファイルが最適化されます。

## デプロイ

高機能ホスティングサービス [Netlify](https://www.netlify.com) を使って簡単にデプロイ＆公開できます。

```
$ npm run dep

? No site id specified, create a new site: Yes
? Path to deploy? (current dir): public
```

初回デプロイ時はユーザー登録＆認証確認とサイト設定を行います。
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
