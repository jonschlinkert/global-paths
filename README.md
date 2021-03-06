# global-paths [![NPM version](https://img.shields.io/npm/v/global-paths.svg?style=flat)](https://www.npmjs.com/package/global-paths) [![NPM monthly downloads](https://img.shields.io/npm/dm/global-paths.svg?style=flat)](https://npmjs.org/package/global-paths)  [![NPM total downloads](https://img.shields.io/npm/dt/global-paths.svg?style=flat)](https://npmjs.org/package/global-paths) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/global-paths.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/global-paths)

> Returns an array of unique "global" directories based on the user's platform and environment. The resulting paths can be used for doing lookups for generators or other globally installed npm packages. Node.js / JavaScript.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save global-paths
```

## Usage

```js
var paths = require('global-paths');
console.log(paths());

// results in (with my setup - macbook pro)
[ '/Users/jonschlinkert/dev/path-utils/global-paths/node_modules',
  '/usr/local/lib/node_modules',
  '/Users/jonschlinkert/dev/path-utils/node_modules',
  '/Users/jonschlinkert/dev/node_modules',
  '/Users/jonschlinkert/node_modules',
  '/Users/node_modules',
  '/usr/lib/node_modules',
  '/node_modules' ]
```

## About

### Related projects

* [contains-path](https://www.npmjs.com/package/contains-path): Return true if a file path contains the given path. | [homepage](https://github.com/jonschlinkert/contains-path "Return true if a file path contains the given path.")
* [cwd](https://www.npmjs.com/package/cwd): Easily get the CWD (current working directory) of a project based on package.json, optionally starting… [more](https://github.com/jonschlinkert/cwd) | [homepage](https://github.com/jonschlinkert/cwd "Easily get the CWD (current working directory) of a project based on package.json, optionally starting from a given path. (node.js/javascript util)")
* [git-config-path](https://www.npmjs.com/package/git-config-path): Resolve the path to the user's local or global .gitconfig. | [homepage](https://github.com/jonschlinkert/git-config-path "Resolve the path to the user's local or global .gitconfig.")
* [global-modules](https://www.npmjs.com/package/global-modules): The directory used by npm for globally installed npm modules. | [homepage](https://github.com/jonschlinkert/global-modules "The directory used by npm for globally installed npm modules.")
* [global-prefix](https://www.npmjs.com/package/global-prefix): Get the npm global path prefix. | [homepage](https://github.com/jonschlinkert/global-prefix "Get the npm global path prefix.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor**<br/> | 
| --- | --- |
| 6 | [jonschlinkert](https://github.com/jonschlinkert) |
| 1 | [gucong3000](https://github.com/gucong3000) |

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/global-paths/blob/master/LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.0, on December 10, 2016._