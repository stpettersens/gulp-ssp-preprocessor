### gulp-ssp-preprocessor
> :tropical_drink: Gulp plug-in for simple preprocessor implementation.

<!--[![Build Status](https://travis-ci.org/stpettersens/gulp-ssp-preprocessor.png?branch=master)](https://travis-ci.org/stpettersens/gulp-preprocessor)-->
[![npm version](https://badge.fury.io/js/gulp-ssp-preprocessor.svg)](http://npmjs.com/package/gulp-ssp-preprocessor)
[![Dependency Status](https://david-dm.org/stpettersens/gulp-remove-markdown.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-ssp-preprocessor) [![Development Dependency Status](https://david-dm.org/stpettersens/gulp-ssp-preprocessor/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-ssp-preprocessor#info=devDependencies)

##### Install:

    $ npm install --save-dev gulp-ssp-preprocessor

##### Usage:
```js
var gulp = require('gulp'),
preprocessor = require('gulp-ssp-preprocessor');

gulp.task('default', function () {
	return gulp.src('source.js')
	.pipe(preprocessor({
		conditions: ['FOO']
	}))
	.pipe(gulp.dest('out'));
});
```

##### Options

* Options object with **conditions** property which is an array of Strings.
