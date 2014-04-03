var gulp		= require('gulp');
var stylus		= require('gulp-stylus');
var browserify 	= require('gulp-browserify');
var hbsfy		= require('hbsfy');
var uglify 		= require('gulp-uglify');
var concat 		= require('gulp-concat');

gulp.task('default', function() {
	console.log('Vamos que nos vamos');
});

gulp.task('scripts', function() {
	console.log('cambios en script!');
	gulp.src('assets/js/*.js')
		.pipe(browserify({
			transform: ['hbsfy']
		}))
		.pipe(uglify())
		.pipe(concat('script.js'))
		.pipe(gulp.dest('js/'))
});

gulp.task('stylus', function() {
	gulp.src('assets/css/*.styl')
		.pipe(stylus({
			import: ['nib'],
			use: ['nib']
		}))
		.pipe(gulp.dest('css/'))
});

gulp.task('plantilla', function() {
	gulp.src('assets/plantillas/*.hbs')

})

gulp.watch('assets/css/*.styl', ['stylus']);
gulp.watch('assets/js/*.js', ['scripts']);
gulp.watch('assets/plantillas/*.hbs' ['plantilla']);