'use strict'

var gulp = require('gulp'),
      pp = require('./');

gulp.task('preprocess', function() {
	return gulp.src(['main.js', 'foo.js'])
	.pipe(pp({
		conditions: ['FIREFOX']
	}))
	.pipe(gulp.dest('out'));
});

gulp.task('default', ['preprocess'], function(){});
