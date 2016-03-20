//Requires
//================================================= 

var gulp = require('gulp');


// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// JS & CSS concatenation
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
// Browser sync
var browserSync = require('browser-sync').create();
// CSS & JS Minification
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
// Image Minification
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
// Enable build sequence
var runSequence = require('run-sequence');
// SCSS lint
var sassLint = require('gulp-sass-lint');




gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//Tasks
//================================================= 

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

// Read more https://www.npmjs.com/package/gulp-imagemin
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('sassLinter', function () {
  gulp.src('app/scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});


//Scripts
//================================================= 



gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'useref', 'images', 'fonts', 'sassLinter'],
    callback
  )
})

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})




