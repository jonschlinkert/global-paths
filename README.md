# global-paths [![NPM version](https://badge.fury.io/js/global-paths.svg)](http://badge.fury.io/js/global-paths)

> Returns an array of unique "global" directories based on the user's platform and environment. The resulting paths can be used for doing lookups for generators or other globally installed npm packages. Node.js / JavaScript.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i global-paths --save
```

## Usage

```js
var paths = require('global-paths');
console.log(paths())

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

## Related projects

* [cwd](https://github.com/jonschlinkert/cwd): Node.js util for easily getting the current working directory of a project based on package.json… [more](https://github.com/jonschlinkert/cwd)
* [contains-path](https://github.com/jonschlinkert/contains-path): Return true if a file path contains the given path.
* [global-modules](https://github.com/jonschlinkert/global-modules): The directory used by npm for globally installed npm modules.
* [global-prefix](https://github.com/jonschlinkert/global-prefix): Get the npm global path prefix.
* [git-config-path](https://github.com/jonschlinkert/git-config-path): Resolve the path to the user's global .gitconfig.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/global-paths/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on July 15, 2015._