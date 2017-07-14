/* jshint node: true, mocha: true */

var util = require('util');
var path = require('path');

var expect = require('chai').expect;

var lib = require('..');

describe('[index]', function () {
  function libFunc(runner, options) {
    return function () {
      return lib(runner, options);
    };
  }

  it('throws if no path is provided in the reporter options', function () {
    var errMessage = util.format(
      'no reporter script path specified, use "%s"',
      '--reporter-options path=./path/to/file.js'
    );

    expect(libFunc({}, {})).to.throw(Error, errMessage);
  });

  it('throws if the file in the provided path does not exist', function () {
    var PATH = './fixtures/does-not-exist.js';
    var expectedPath = path.resolve('.', PATH);

    expect(libFunc({}, {
      reporterOptions: {
        path: PATH
      }
    })).to.throw(Error, util.format(
      'no file found at "%s"',
      expectedPath
    ));
  });

  it('resolves paths based on cwd', function () {
    var PATH = 'fixtures/does-not-exist.js';
    var expectedPath = path.resolve(process.cwd(), PATH);

    expect(libFunc({}, {
      reporterOptions: {
        path: PATH
      }
    })).to.throw(Error, util.format(
      'no file found at "%s"',
      expectedPath
    ));
  });

  it('requires the file provided in options.reporterOptions.path');
});

describe('[cli usage]', function () {
  it('delegates reporting to the desired file when used with the mocha cli');
});
