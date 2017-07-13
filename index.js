/* jshint node: true */

var path = require('path');

module.exports = function ScriptReporter(runner, options) {
  if (!options.reporterOptions || !options.reporterOptions.path) {
    throw new Error('no reporter script path specified, use "--reporter-options path=./path/to/file.js"');
  }

  var reporterPath = path.resolve(options.reporterOptions.path);
  var reporter = require(reporterPath);

  return new reporter(runner, options);
};
