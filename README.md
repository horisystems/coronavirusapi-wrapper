# Coronavirus API Wrapper

A wrapper to work with the [Coronavirus API](https://www.covid19api.dev/).

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
global.fetch = require('node-fetch');

// to import a specific method
import CoronaVirusApiWrapper from 'coronavirusapi-wrapper';

const api = new CoronaVirusApiWrapper({
  token: 'YOUR_TOKEN_HERE'
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
  token: 'YOUR_TOKEN_HERE'
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
  token: 'YOUR_TOKEN_HERE'
});

api
  .getSep2020({ username: "bearer", page: 1 })
  .then(data => console.log(data));
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Finbarrs Oketunji** _aka 0xnu_ - _Main Developer_ - [0xnu](https://github.com/0xnu)

See also the list of [contributors](https://github.com/Cloudeya/coronavirusapi-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Copyright

(c) 2020 [Cloudeya Limited](https://cloudeya.org).
