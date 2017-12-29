/// <binding AfterBuild='default' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

gulp.task('default', function () {
    return gulp
        .src([
            '!wwwroot/app/*.dist.js',
            'wwwroot/app/app.js',
            'wwwroot/app/**/*.module.js',
            'wwwroot/app/**/*.js'
        ])
        .pipe(plug.sourcemaps.init())
        .pipe(plug.concat('app.dist.js'))
        .pipe(plug.babel({ presets: ['env'] }))
        .pipe(plug.uglify())
        .pipe(plug.sourcemaps.write('.'))
        .pipe(gulp.dest('wwwroot/app'));
});