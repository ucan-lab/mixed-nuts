const gulp = require('gulp');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const cache = require('gulp-cached');
const ejs = require("gulp-ejs");
const gutil = require('gulp-util');
const htmlbeautify = require('gulp-html-beautify');
const reload = browserSync.reload;

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './public'
        },
        open: 'external'
    });
});

gulp.task('ejs', function () {
    return gulp.src(
        ["./resources/views/**/*.ejs", "!./resources/views/**/_*.ejs"]
    )
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(ejs({}, { "root": "./resources/views" }, { "ext": ".html" }).on('error', gutil.log))
        .pipe(htmlbeautify())
        .pipe(gulp.dest("./public"))
});

gulp.task('watch', function () {
    gulp.watch(['./resources/**/*.ejs'], ['ejs', reload]);
    gulp.watch('./public/css/**').on("change", reload);
    gulp.watch('./public/js/**').on("change", reload);
});

gulp.task('default', ['browser-sync', 'watch', 'ejs']);
