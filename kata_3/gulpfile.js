var gulp		= require('gulp');
var stylus		= require('gulp-stylus');
var browserify 	= require('gulp-browserify');
var uglify 		= require('gulp-uglify');
var concat 		= require('gulp-concat');
var handlebars 	= require('gulp-handlebars');

gulp.task('default', ['scripts', 'stylus']);

gulp.task('scripts', function() {
	return gulp.src('assets/js/principal.js')
		.pipe(browserify({
			transform: ['hbsfy']
		}))
		.pipe(uglify())
		//.pipe(concat('script.js'))
		.pipe(gulp.dest('js/'))
});

gulp.task('stylus', function() {
	return gulp.src('assets/css/*.styl')
		.pipe(stylus({
			import: ['nib'],
			use: ['nib']
		}))
		.pipe(gulp.dest('css/'))
});

gulp.task('plantilla', function() {
	return gulp.src('assets/plantillas/*.hbs')
		.pipe(gulp.dest('plantillas/'))
})

gulp.watch('assets/css/*.styl', ['stylus']);
gulp.watch('assets/js/*.js', ['scripts']);
gulp.watch('assets/plantillas/*.hbs' ['plantilla']);