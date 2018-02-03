
![mixed-nuts](https://user-images.githubusercontent.com/35098175/35766776-46a3663c-0921-11e8-9bba-f21116b2eafa.jpg)

# Mixed-Nuts〜Webサイト制作環境〜

Mixed-Nuts(ミックスナッツ)は便利なライブラリを組み合わせた快適かつ高速なWebサイト制作環境を提供します。

## セールスポイント

- HTMLテンプレートエンジンは [EJS](http://ejs.co) を採用
  - 素のHTMLも記述可能
- CSSメタ言語は [Sass(Scss記法)](http://sass-lang.com) を採用
  - 素のCSSも記述可能
- [Browsersync](https://browsersync.io) による自動ブラウザリロードによる快適かつ爆速なコーディング環境を提供
- [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)をベースに [Bootstrap3](https://getbootstrap.com)/[Font Awesome](http://fontawesome.io)/[Vue.js](https://jp.vuejs.org)/[Jquery](https://jquery.com)/[lodash](https://lodash.com) などの便利なライブラリを利用可能
- [Laravel Mix Purgecss](https://github.com/spatie/laravel-mix-purgecss) により未使用のCSSを除去
- [Netlify](https://www.netlify.com) で簡単デプロイ
- ベンダープレフィックス自動付加
- 開発/本番ビルドで圧縮切り替え
- バージョニング(ブラウザキャッシュ対策)
- Laravel(システム側)とのやり取りがスムーズ

## 要件

- [Git](https://git-scm.com)
- [Nodejs(npm)](https://nodejs.org/ja)
- [Netlifyアカウント](https://www.netlify.com)(GitHubアカウント)

## 開発環境構築

### インストール

```
$ git clone https://github.com/ucan-lab/mixed-nuts ./example
$ cd example
$ npm i
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

### ビルド(アセット監視モード、ブラウザ自動リロード)

```
$ npm run watch
$ npm run gulp
```

それぞれ別窓でコマンドを実行してください。

### ビルド(最適化)

```
$ npm run prod
```

css, javascriptファイルが最適化(圧縮)されます。

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

## デプロイ(自動)

[wiki参照](https://github.com/ucan-lab/mixed-nuts/wiki/Netlify-%E8%87%AA%E5%8B%95%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4%E8%A8%AD%E5%AE%9A)

## 補足等

[https://github.com/ucan-lab/mixed-nuts/wiki](https://github.com/ucan-lab/mixed-nuts/wiki)
