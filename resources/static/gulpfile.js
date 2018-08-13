var gulp = require('gulp');
var babel = require("gulp-babel");
var browserify = require('browserify');
var babelify = require('babelify');
var del = require('del');
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var gutil = require('gulp-util');


gulp.task('clean', () => {      // сам таск удаления 
  del.sync('dist');    
});

gulp.task('start', ['build'], () => {
   gulp.watch('src/*.js', ['build']);
});

gulp.task('build', ['clean','apply-prod-environment'], () => {
	
  var browserifyOptions = {
        debug: false,
        entries: 'src/carList.js',
        extensions: ['.jsx', '.js'],
    };	
	
    return browserify(browserifyOptions)
        .transform(babelify.configure({
            presets: [['es2015' ,{ modules: false }], 'react']
        }))
        .bundle()
        .on('error', gutil.log)
        .pipe(source('build.js'))		
        .pipe(buffer())
        .pipe(gulp.dest('dist'));      
});

gulp.task('apply-prod-environment', () => {
    process.env.NODE_ENV = 'production';
});

gulp.task('watch', () => {
    gulp.watch('src/*.js', ['build']);
});
