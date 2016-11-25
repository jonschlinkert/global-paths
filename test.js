'use strict';

/* deps: mocha */
var assert = require('assert');
var paths = require('./');
var path = require('path');

describe('paths', function() {
  it('should return an array of directories:', function() {
    assert.equal(paths().length > 1, true);
  });
});

describe('order', function() {
  var testCase1 = paths(__dirname);
  it('paths[0]', function() {
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

      if(process.env.NVM_BIN) {
        it('nvm', function() {
          var indexNvm;
          for(var i = indexRootNpm + 1; i < testCase1.length; i++) {
            if(/nvm\/versions\/node\/v[\d\.]+\/lib\/node_modules$/.test(testCase1[i])) {
              indexNvm = i;
            } else {
            }
          }
          assert.ok(indexNvm < indexLib);
        });
      }
    }
  }
  console.log(testCase1);
});
