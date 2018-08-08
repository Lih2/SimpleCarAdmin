var gulp = require('gulp');
var babel = require("gulp-babel");
var browserify = require('browserify');
var babelify = require('babelify');
var del = require('del');
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var gutil = require('gulp-util');


gulp.task('clean', function() {      // сам таск удаления 
  del.sync('dist');    
});

gulp.task('build', ['watch','clean','apply-prod-environment'], () => {
	
  var browserifyOptions = {
        debug: false,
        entries: 'src/index.js',
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

gulp.task('apply-prod-environment', function() {
    process.env.NODE_ENV = 'production';
});

gulp.task('watch', function () {
    gulp.watch('src/*.js', ['build']);
});
