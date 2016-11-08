(function(){
    'use strict';

    var gulp      = require('gulp'),
        sass      = require('gulp-sass'),
        clean     = require('gulp-clean'),
        cssmin    = require('gulp-cssmin'),
        rename    = require('gulp-rename'),
        concat    = require('gulp-concat'),
        jsmin     = require('gulp-jsmin')
        ;


    // build scss in css
    gulp.task('sass', function(){
        gulp.src("css/scss/0_build.scss")
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest("css/scss/"));
    });


    // concat and min all css file
    gulp.task('concat-min-css', function(){
        setTimeout(function(){
            gulp.src('css/**/*.css')
                .pipe(concat("styles.css"))
                .pipe(cssmin())
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest("build/css/"));
        }, 1000)
    });

    // concat and min all js file
    gulp.task('concat-min-js', function(){
        setTimeout(function(){
            gulp.src('js/*.js')
                .pipe(concat("scripts.js"))
                .pipe(jsmin())
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest("build/js/"));
        }, 1000)
    });

    // delete css file
    gulp.task('clean-css', function () {
        gulp.src('build/css/*.css', {read: false})
            .pipe(clean({force: true}));
    });

    // delete js file
    gulp.task('clean-js', function () {
        gulp.src('build/js/*.js', {read: false})
            .pipe(clean({force: true}));
    });

    // multiple tasks js files
    gulp.task('build-js', [ 'clean-js', 'concat-min-js' ], function () {

    });

    // multiple tasks css files
    gulp.task('build-css', [ 'clean-css', 'sass', 'concat-min-css' ], function () {

    });

    // multiple tasks for all
    gulp.task('default', ['build-css', 'build-js' ], function () {

    });

    gulp.task('watch', function () {
        gulp.watch('css/**/*.scss', ['build-css']);
        gulp.watch('js/*.js', ['build-js']);
    });

})();