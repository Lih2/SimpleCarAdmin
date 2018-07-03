var gulp = require('gulp');
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var browserify = require('browserify');
var del = require('del');

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
	
	var b = browserify({
      entries: 'dist/.js',
      debug: false,
	  transform:'reactify'
    });	
	
    return b.bundle()
	.pipe(concat('build.js'))
    .pipe(gulp.dest('dist'));					
});

gulp.task('watch', function () {
    gulp.watch('src/*.js', ['build']);
});
