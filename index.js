'use strict';
var gutil = require('gulp-util'),
  through = require('through2'),
       pp = require('ssp-preprocessor');

function preprocessor(file, options, cb) {
	if(options == null) return cb(null, pp(file, []));
	return cb(null, pp(file, options.conditions).join('\n'));
}

module.exports = function(options) {
	return through.obj(function(file, enc, cb) {
		if(file.isNull()) {
			cb(null, file);
			return;
		}

		if(file.isStream()) {
			cb(new gutil.PluginError('gulp-ssp-preprocessor', 'Streaming not supported'));
			return;
		}

		preprocessor(file.contents.toString().split('\n'), options, function(err, data) {
			if(err) {
				cb(new gutil.PluginError('gulp-ssp-preprocessor', err, {filename: file.path}));
				return;
			}
			file.contents = new Buffer(data);
			cb(null, file);
		});
	});
};
