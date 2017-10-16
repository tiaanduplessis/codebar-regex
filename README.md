<h1 align="center">codebar-regex</h1>
<div align="center">
  <strong>Regular expression for matching codebar barcode</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/codebar-regex">
    <img src="https://img.shields.io/npm/v/codebar-regex.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/codebar-regex">
  <img src="https://img.shields.io/npm/dm/codebar-regex.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/codebar-regex">
    <img src="https://img.shields.io/travis/tiaanduplessis/codebar-regex.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fcodebar-regex">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fcodebar-regex.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/codebar-regex">
    <img src="https://dependencyci.com/github/tiaanduplessis/codebar-regex/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/codebar-regex/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/codebar-regex.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/codebar-regex/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/codebar-regex.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/codebar-regex/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/codebar-regex.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20codebar-regex!%20https://github.com/tiaanduplessis/codebar-regex%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/codebar-regex.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/codebar-regex/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/codebar-regex.svg)](https://greenkeeper.io/)

```sh
$ npm install --save codebar-regex
# OR
$ yarn add codebar-regex
```

## Usage

```js

const codebarRegex = require('codebar-regex')

console.log(codebarRegex().test('A40156B')) // true

console.log(codebarRegex().test('A31117013206375B')) // true

```


## CLI

```sh
$ npm install --global codebar-regex
# OR
$ yarn global add codebar-regex
```

Then:

```sh
$ codebar A40156B
# true
```

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
