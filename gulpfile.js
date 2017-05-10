////////////////////////////////////////////////
// Required
////////////////////////////////////////////////

var gulp = require("gulp"),
	uglify = require('gulp-uglify'),
	uglifycss = require('gulp-uglifycss'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	nodemon = require('gulp-nodemon');
	jade = require('gulp-jade');


////////////////////////////////////////////////
// Scripts Task
////////////////////////////////////////////////
gulp.task("scss", function(){
	gulp.src('./precompile/**/*.scss')
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglifycss())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('./css'))
		.pipe(reload({stream:true}));
});

gulp.task("jade", function(){
	gulp.src("./precompile/**/*.jade")
	.pipe(plumber())
	.pipe(jade())
	.pipe(gulp.dest("./"))
	.pipe(reload({stream:true}));
})

////////////////////////////////////////////////
// HTML Task
////////////////////////////////////////////////
gulp.task('html', function(){
	gulp.src('./*.html')
		.pipe(reload({stream:true}));
})

////////////////////////////////////////////////
// Browser-Sync Task
////////////////////////////////////////////////
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: "./"
		}
	})
})

////////////////////////////////////////////////
// Watch Task
////////////////////////////////////////////////
gulp.task("watch", function(){
	gulp.watch('./precompile/**/*.scss', ["scss"])
	gulp.watch('./precompile/**/*.jade', ["jade"]);

})
////////////////////////////////////////////////
// Default Task
////////////////////////////////////////////////
gulp.task("default", ["scss","browser-sync", "watch", "jade"]);
