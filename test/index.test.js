/* jshint node: true, mocha: true */

var expect = require('chai').expect;

var lib = require('..');

describe('[index]', function () {
  it('throws if no path is provided in the reporter options');

  it('throws if the file in the provided path does not exist');

  it('requires the file provided in options.reporterOptions.path');
});

describe('[cli usage]', function () {
  it('delegates reporting to the desired file when used with the mocha cli');
});
