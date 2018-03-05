let mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


mix.setPublicPath('public')
  .js('resources/assets/js/app.js', 'js')
  .sass('resources/assets/sass/app.scss', 'css')
  .options({
    postCss: [
      require('autoprefixer')({
        browsers: ['last 2 versions'],
        cascade: false
      })
    ]
  })
  .purgeCss({
    enabled: true,
    extensions: ['html', 'js', 'php', 'vue', 'ejs']
  })
  .copyDirectory('resources/assets/images', 'public/images');


mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'extract-loader',
          },
          {
            loader: 'html-loader',
          },
          {
            loader: 'ejs-compiled-loader?htmlmin'
          }
        ] 
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin(
      [
        {
          test: /\.ejs$/,
          options: {
            'ejs-compiled-loader': {
              'htmlmin': true,
              'htmlminOptions': {
                removeComments: true
              }
            },
          }
        }
      ]
    ),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index.html',
      template: 'resources/views/index.ejs'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'pages/contact_form/index.html',
      template: 'resources/views/pages/contact_form/index.ejs'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'pages/contact_form/thanks.html',
      template: 'resources/views/pages/contact_form/thanks.ejs'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'pages/holy_grail.html',
      template: 'resources/views/pages/holy_grail.ejs'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      server: { baseDir: ['public']},
      files: [
        'public/css/*.css',
        'public/js/*.js'
      ]
    })
  ]
})