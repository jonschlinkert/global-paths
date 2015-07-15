'use strict';

/* deps: mocha */
var assert = require('assert');
var paths = require('./');

describe('paths', function () {
  it('should return an array of directories:', function () {
    assert.equal(paths().length > 1, true);
  });
});
