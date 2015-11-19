'use strict';

var path = require('path');
var root = require('global-modules');
var isWindows = require('is-windows');
var unique = require('array-unique');

/**
 * Returns an array of directories to use as a starting
 * point for our lookups.
 *
 * @param  {String} `cwd` Defaults to `process.cwd()`.
 * @return {Array} Array of directories
 */

module.exports = function paths(cwd) {
  cwd = cwd || process.cwd();

  var res = [npm(cwd)].concat(root);
  var segs = cwd.split(path.sep);

  while (segs.pop()) {
    res.push((!isWindows() ? '/' : '') + npm(segs.join('/')));
  }

  if (process.env.NODE_PATH) {
    var nodePaths = process.env.NODE_PATH.split(path.delimiter);
    res = res.concat(nodePaths.filter(Boolean));
  } else {
    if (isWindows()) {
      res.push(npm(process.env.APPDATA) + '/npm');
    } else {
      res.push(npm('/usr/lib'));
    }
  }

  res.push.apply(res, require.main.paths);
  return unique(res);
};

function npm(dir) {
  return path.resolve(dir, 'node_modules');
}
