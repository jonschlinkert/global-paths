'use strict';

require('mocha');
var path = require('path');
var assert = require('assert');
var paths = require('./');

describe('order', function() {
  var testCase1 = paths(__dirname);

  it('should return an array of directories:', function() {
    assert.ok(testCase1.length > 1);
    assert.ok(Array.isArray(testCase1));
  });

  it('./global-paths/test/node_modules', function() {
    assert.equal(testCase1[0], path.resolve(__dirname, 'node_modules'));
  });
  var indexRootNpm;

  it('/node_modules', function() {
    indexRootNpm = testCase1.indexOf(path.resolve('/node_modules'));
    assert.ok(indexRootNpm >= 1);
  });

  if(!process.env.NODE_PATH) {
    if(process.platform === 'win32') {

      it('%APPDATA%\\Roaming\\npm\\node_modules', function() {
        var indexAppData;
        for(var i = indexRootNpm + 1; i < testCase1.length; i++) {
          if(/\\npm\\node_modules$/.test(testCase1[i])) {
            indexAppData = i;
          }
        }
        assert.ok(testCase1.length > indexAppData);
      });

    } else {

      var indexLib;
      it('/usr/lib/node_modules', function() {
        indexLib = testCase1.indexOf('/usr/lib/node_modules');
        assert.ok(indexLib > indexRootNpm);
        assert.ok(testCase1.length > indexLib);
      });

      it('bin path', function() {
        var binNvm = testCase1.indexOf(path.resolve(process.execPath, '../lib/node_modules'));
        assert.ok(binNvm < indexLib);
      });
    }
  }

  it('./global-paths', function() {
    indexRootNpm = testCase1.indexOf(path.resolve('/node_modules'));
    assert.equal(testCase1[testCase1.length - 1], __dirname);
  });

});
