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
