"use strict";

var jshint = require('gulp-jshint');
var gulp = require('gulp');

var paths = {
  scripts: ['**/*.js', '!node_modules/**/*.js', '!typings/*.ts'],
};

gulp.task('jshint', function () {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['jshint']);
});

// Builds the application
gulp.task('build', ['jshint']);

