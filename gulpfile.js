var gulp = require('gulp');
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var browserify = require('browserify');
var del = require('del');
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var uglify = require("gulp-uglify");


gulp.task('clean', function() {      // сам таск удаления 
  del.sync('dist');    
});

gulp.task('default', ['clean'], () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015','react']
        }))   	
        .pipe(gulp.dest('dist'));				
});

gulp.task('build', ['default'], () => {
  browserify({
    entries: 'src/index.js',
    debug: true
  })
  .bundle()
  .pipe(source('build.min.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/*.js', ['build']);
});
