<div align="center">
	<h1>Coronavirus API Wrapper</h1>
	<strong> <i>A wrapper to work with the <a href="https://www.covid19api.dev/">Coronavirus API</a></i></strong><br><br>

![GitHub top language](https://img.shields.io/github/languages/top/Cloudeya/coronavirusapi-wrapper)
![Snyk Vulnerabilities for npm scoped package](https://img.shields.io/snyk/vulnerabilities/npm/coronavirusapi-wrapper)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Cloudeya/coronavirusapi-wrapper)
![GitHub last commit](https://img.shields.io/github/last-commit/Cloudeya/coronavirusapi-wrapper)<br>
![npm bundle size](https://img.shields.io/bundlephobia/minzip/coronavirusapi-wrapper)
[![Build Status](https://travis-ci.org/Cloudeya/coronavirusapi-wrapper.svg?branch=master)](https://travis-ci.org/Cloudeya/coronavirusapi-wrapper)
![npm](https://img.shields.io/npm/dw/coronavirusapi-wrapper)<br>
![GitHub issues](https://img.shields.io/github/issues-raw/Cloudeya/coronavirusapi-wrapper)
![License](https://img.shields.io/github/license/Cloudeya/coronavirusapi-wrapper)
![Profile visits](https://badges.pufler.dev/visits/Cloudeya/coronavirusapi-wrapper)

</div>
<br>

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Coronavirus API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install coronavirusapi-wrapper --save
```

## How to use

### ES6

```js
global.fetch = require("node-fetch");

// to import a specific method
import CoronaVirusApiWrapper from "coronavirusapi-wrapper";

const api = new CoronaVirusApiWrapper({
  token: "YOUR_TOKEN_HERE"
});

// using  method
api
  .getSep2020({ username: "bearer", page: 1 })
  .then(data => console.log(data));
```

### CommonJS

```js
const CoronaVirusApiWrapper = require('coronavirusapi-wrapper').default;

const api = new CoronaVirusApiWrapper({
  token: "YOUR_TOKEN_HERE"
});
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="coronavirusapi-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="coronavirusapi-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `CoronaVirusApiWrapper`. Follow an example:

```js

const api = new CoronaVirusApiWrapper({
  token: "YOUR_TOKEN_HERE"
});

api
  .getSep2020({ username: "bearer", page: 1 })
  .then(data => console.log(data));
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Cloudeya/coronavirusapi-wrapper/tags).

## Authors

- **Finbarrs Oketunji** _aka 0xnu_ - _Main Developer_ - [0xnu](https://github.com/0xnu)

See also the list of [contributors](https://github.com/Cloudeya/coronavirusapi-wrapper/contributors) who participated in this project.

## License

This project is licensed under the [WTFPL License](LICENSE) - see the file for details.

## Copyright

(c) 2020 [Cloudeya Limited](https://cloudeya.org).

