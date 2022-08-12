<div align="center">

  <img alt="covid19 api icon" src="https://moatsystems.com/images/coronavirus.png" height="120" />
	<h1>COVID-19 API SDK for JavaScript</h1>
    <strong> <i>Develop and deploy applications, mobile and web, with popular JavaScript Frameworks using <a href="https://moatsystems.com/covid19-api/">COVID19 API</a> SDK for JavaScript.</i></strong><br><br>

![GitHub top language](https://img.shields.io/github/languages/top/moatsystems/coronavirusapi-wrapper)
![Snyk Vulnerabilities for npm scoped package](https://img.shields.io/snyk/vulnerabilities/npm/coronavirusapi-wrapper)
![GitHub package.json version](https://img.shields.io/github/package-json/v/moatsystems/coronavirusapi-wrapper)
![GitHub last commit](https://img.shields.io/github/last-commit/moatsystems/coronavirusapi-wrapper)<br>
![npm bundle size](https://img.shields.io/bundlephobia/minzip/coronavirusapi-wrapper)
[![Build Status](https://travis-ci.com/moatsystems/coronavirusapi-wrapper.svg?branch=master)](https://travis-ci.com/moatsystems/coronavirusapi-wrapper)
![npm](https://img.shields.io/npm/dw/coronavirusapi-wrapper)<br>
![GitHub issues](https://img.shields.io/github/issues-raw/moatsystems/coronavirusapi-wrapper)
![License](https://img.shields.io/github/license/moatsystems/coronavirusapi-wrapper)
![Profile visits](https://badges.pufler.dev/visits/moatsystems/coronavirusapi-wrapper)

</div>
<br>


### Install

```JavaScript
npm i coronavirusapi-wrapper

// or  

yarn add coronavirusapi-wrapper
```

### Usage

```JavaScript
import { sdk, usDeath, usConfirmed, globalConfirmed, globalDeath, globalDailyReport, globalRecovered } from "coronavirusapi-wrapper";

// first, authenticate
sdk.auth("<username>", "<password>"); 

// save token for the next time;
const token = sdk.getToken();

// you can set token directly
sdk.setToken("<Token here>");

// second, call the api endpoint you need
usDeath.getAll();
usConfirmed.getAll();
....
```

The COVID-19 API documentation is available [here](https://docs.covid19api.dev/). If you need further assistance, don't hesitate to [contact us](https://moatsystems.com/contact/).


### Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/moatsystems/coronavirusapi-wrapper/tags).

### License

This project is licensed under the [BSD 3-Clause License](LICENSE) - see the file for details.

### Copyright

(c) 2020-2022 [Moat Systems Limited](https://moatsystems.com).