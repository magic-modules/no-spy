## @magic-modules/no-spy

[gdpr](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) compliance for
 [@magic](https://magic.github.io/core) pages that do not track data.

this module is a smaller version of the
 [gdpr magic-module](https://magic-modules.github.io/gdpr)
cookie notification popup,
showing a "we do not track" message and omitting the allow and deny cookie functionality,
making this module ~2kb smaller than the gdpr module.

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

#### install:
```bash
npm install --save-exact @magic-modules/no-spy
```

#### usage:

##### activate:
to activate NoSpy, add it to the list of hoisted modules
```javascript
// src/config.mjs
export default {
  // ... other config variables

  HOIST: 'NoSpy',

  // hoist multiple modules using an array
  // HOIST: ['NoSpy', 'Messages'],
}
```
after doing this, the NoSpy module will show up as a cookie on your page.

##### change text:

to change content and variables, add the following to /src/app.mjs#state

```javascript
// src/app.mjs
export const state = {
  nospy: {
    title: 'Privacy Notice',
    content: 'This app neither saves, collects, nor shares any data about you.',
    buttonText: 'Awesome!',
  },
})
```

#### changelog

##### 0.0.1
first commit

##### 0.0.2
remove sizes from css, make overwriteable

##### 0.0.3 
* style: remove animation
* style: remove positioning
* style: resize

##### 0.0.4 
simplify actions

##### 0.0.5
* FIX: modal positioning

##### 0.0.6 - unreleased
...

[npm-image]: https://img.shields.io/npm/v/@magic-modules/no-spy.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/no-spy
[travis-image]: https://img.shields.io/travis/com/magic-modules/no-spy/master
[travis-url]: https://travis-ci.com/magic-modules/no-spy
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/no-spy/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/no-spy/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/no-spy/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/no-spy
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/no-spy.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/no-spy.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/no-spy/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/no-spy
