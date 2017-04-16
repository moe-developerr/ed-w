var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var merge = require('merge-stream');

var AUTOPREFIX = {
	browsers: [
		"ff >= 16",
		"Chrome >= 20",
		"ie >= 9",
		"Opera >= 15",
		"Safari >= 3.1",
		"ie_mob >= 10",
		"ios_saf >= 3.2",
		"bb >= 7",
		"and_uc 9.9"
	]
};
var PATH = {
	inputMarkup: './**/*.php',
	inputStyles: './src/styles/**/*.scss',
	inputVendors: ['./src/scripts/vendors/*.js', './src/scripts/vendors/*.min.js'],
	inputModules: ['./src/scripts/modules/**/*.js'],
	outputStyles: './dist/styles',
	outputVendors: './dist/scripts/vendors',
	outputModules: './dist/scripts'
};

gulp.task('styles', function () {
	return gulp.src(PATH.inputStyles)
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer(AUTOPREFIX))
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest(PATH.outputStyles))
		.pipe(browserSync.stream());
});

gulp.task('scripts', function () {
	var vendors = gulp.src(PATH.inputVendors)
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.extname = '.min.js';
		}))
		.pipe(gulp.dest(PATH.outputVendors));

	var modules = gulp.src(PATH.inputModules)
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest(PATH.outputModules))
		.pipe(browserSync.stream());

	return merge(vendors, modules);
});

gulp.task('browserSync', function () {
	browserSync.init({
		proxy: 'http://localhost/Educallos/Website/new%20website/root/main.php'
	});
});

gulp.task('watch', ['styles', 'scripts', 'browserSync'], function () {
	gulp.watch(PATH.inputStyles, ['styles']);
	gulp.watch([PATH.inputVendors, PATH.inputModules], ['scripts']);
	gulp.watch(PATH.inputMarkup, browserSync.reload);
});

gulp.task('default', ['watch']);