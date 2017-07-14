/* jshint node: true */

var util = require('util');
var path = require('path');

var NO_PATH_OPTION = util.format(
  'no reporter script path specified, use "%s"',
  '--reporter-options path=./path/to/file.js'
);
var FILE_DOES_NOT_EXIST = 'no file found at "%s"';

module.exports = function ScriptReporter(runner, options) {
  if (!options.reporterOptions || !options.reporterOptions.path) {
    throw new Error(NO_PATH_OPTION);
  }

  var reporterPath = path.resolve('.', options.reporterOptions.path);

  try {
    require.resolve(reporterPath);
  } catch (e) {
    throw new Error(util.format(FILE_DOES_NOT_EXIST, reporterPath));
  }

  var reporter = require(reporterPath);

  return new reporter(runner, options);
};
