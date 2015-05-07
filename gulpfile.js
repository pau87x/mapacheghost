var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');

gulp.task('default', ['css', 'watch']);

gulp.task('css', function () {
   gulp.src('./assets/css/style.less')
   .pipe(less({
      paths: __dirname + '/assets/css',
      filename: 'style.less',
      ru: true
   }))
   .pipe(minifyCSS())
   .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function () {
   gulp.watch(['./assets/css/**/*.less'], ['css']);
});