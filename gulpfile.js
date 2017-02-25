var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var embedTemplates = require('gulp-angular-embed-templates');


/* Codenames tasks */

gulp.task('clean', function () {

    return del(['./build']);

});


gulp.task('css', ['clean'], function () {

    return gulp.src('src/**/*.scss')
        .pipe(concat('haggis22.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build'));


});



gulp.task('build-code', ['clean'], function () {

    // combines all the Angular code from /src along with the dual Angular/Node code from /js
    return gulp.src(['src/**/*.js'])
        .pipe(embedTemplates())
        .pipe(concat('haggis22.js'))
        .pipe(gulp.dest('build'));

});


gulp.task('default', [ 'css', 'build-code' ]);
