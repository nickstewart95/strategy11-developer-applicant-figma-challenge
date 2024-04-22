var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function defaultTask(cb) {
	return new Promise(function (resolve, reject) {
		gulp.src('res/scss/global.scss').pipe(sass()).pipe(gulp.dest('res/build/'));

		resolve();
	});
}

exports.default = defaultTask;
