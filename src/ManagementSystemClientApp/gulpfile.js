"use strict";

var jshint = require('gulp-jshint');
var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require("gulp-sass");
var mainBowerFiles = require('main-bower-files');

var jsPaths = {
  scripts: ['www/**/*.js', '!node_modules/**/*.js', '!bower_components/**/*.js', '!www/dist/**/*.js', '!typings/*.ts']
};

var jsServerPaths = {
  scripts: ['**/*.js', '!www/**/*.js', '!node_modules/**/*.js', '!bower_components/**/*.js', '!www/dist/**/*.js', '!typings/*.ts']
};

// Function that return the build javascript files for the Web App.
var buildJs = function (enviroment) {
  var distName = enviroment === 'dev' ? 'dist-dev.js' : 'dist.js';

  var gulpObject = gulp.src(jsPaths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(ngAnnotate());

  if (enviroment !== 'dev') {
    gulpObject = gulpObject.pipe(uglify());
  }

  return gulpObject.pipe(concat(distName))
    .pipe(gulp.dest('www/dist/js'));
};

gulp.task('build:js', function () {
  return buildJs('dev');
});

gulp.task('build:js:prod', function () {
  return buildJs('prod');
});

// Task that builds the server javascript files.
gulp.task('build:server:js', function () {
  return gulp.src(jsServerPaths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('vendors:js', function () {
  // move JS files
  return gulp.src(mainBowerFiles('**/*.js'))
    .pipe(concat('vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest('www/dist/js'));
});

gulp.task('vendors:css', function () {

  return gulp.src(mainBowerFiles('**/*.css', {
    overrides: {
      bootstrap: {
        main: [
          './dist/css/*.min.css',
        ]
      }
    }
  })).pipe(concat('vendors.css'))
    .pipe(gulp.dest('www/dist/css'));
});

// SCSS and CSS Tasks
gulp.task('sass', function () {

  return gulp.src('./www/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('www/dist/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(jsPaths.scripts, ['build:js']);
  gulp.watch(jsServerPaths.scripts, ['build:server:js']);
});

// Builds the application
gulp.task('build', ['build:js', 'build:server:js', 'sass', 'vendors:js', 'vendors:css']);
gulp.task('build-prod', ['build:js:prod', 'build:server:js', 'sass']);

