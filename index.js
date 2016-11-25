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
  // Convert to absolute path
  cwd = path.resolve(cwd || process.cwd());

  var res = [];
  var segs = cwd.split(path.sep);

  while (segs.length) {
    res.push(segs.concat('node_modules').join(path.sep));
    segs.pop();
  }

  res.push(root);

  if (process.env.NODE_PATH) {
    var nodePaths = process.env.NODE_PATH.split(path.delimiter);
    res = res.concat(nodePaths.filter(Boolean));
  } else {
    if (isWindows()) {
      res.push(npm(path.join(process.env.APPDATA, 'npm')));
    } else {
      res.push(npm('/usr/lib'));
    }
  }

  res.push.apply(res, require.main.paths);
  return unique(res);
};

function npm(dir) {
  return path.join(dir, 'node_modules');
}
