var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    clean = require('gulp-clean'),
    zip = require('gulp-zip'),
    uglify = require('gulp-uglify');

gulp.task('clean', function () {
    return gulp.src('build').pipe(clean());
})
gulp.task('default', ['clean'], function () {
    return gulp.src('*')
        .pipe(gulpif('*.js', uglify()))
        //.pipe(zip('mealtime.zip'))
        .pipe(gulp.dest('build'));
})