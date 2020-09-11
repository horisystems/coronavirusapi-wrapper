/* global fetch */
import API_URL from './config';
import toJSON from './utils';

const fetch = require("isomorphic-unfetch");
const querystring = require("querystring");

export default class CoronaVirusApiWrapper {

  constructor(config) {
    this.token = config.token;
    this.apiURL = config.apiURL || API_URL;
  }

  request(endpoint = "", options = {}) {
    let url = this.apiURL + endpoint;

    let headers = {
      token: this.token,
      "Content-type": "application/json"
    };

    let config = {
      options,
      headers
    };

    return fetch(url, config).then(r => {
      if (r.ok) {
        return r.json();
      }
      throw new Error(r);
    });
  }

  getJan2020(options) {
    let qs = options ? "?" + querystring.stringify(options) : "";

    let url = "/jan2020" + qs;
    let config = {
      method: "GET"
    };
    return this.request(url, config);
  }

  getFeb2020(options) {
    let qs = options ? "?" + querystring.stringify(options) : "";

    let url = "/feb2020" + qs;
    let config = {
      method: "GET"
    };
    return this.request(url, config);
  }

  getMar2020(options) {
    let qs = options ? "?" + querystring.stringify(options) : "";

    let url = "/mar2020" + qs;
    let config = {
      method: "GET"
    };
    return this.request(url, config);
  }

  getApr2020(options) {
    let qs = options ? "?" + querystring.stringify(options) : "";

    let url = "/apr2020" + qs;
    let config = {
      method: "GET"
    };
    return this.request(url, config);
  }

  getMay2020(options) {
    let qs = options ? "?" + querystring.stringify(options) : "";

    let url = "/may2020" + qs;
    let config = {
      method: "GET"
    };
    return this.request(url, config);
  }

  getJun2020(options) {
    let qs = options ? "?" + querystring.stringify(options) : "";

    let url = "/jun2020" + qs;
    let config = {
      method: "GET"
    };
    return this.request(url, config);
  }

  getJul2020(options) {
    let qs = options ? "?" + querystring.stringify(options) : "";

    let url = "/jul2020" + qs;
    let config = {
      method: "GET"
    };
    return this.request(url, config);
  }

  getAug2020(options) {
    let qs = options ? "?" + querystring.stringify(options) : "";

    let url = "/aug2020" + qs;
    let config = {
      method: "GET"
    };
    return this.request(url, config);
  }

  getSep2020(options) {
    let qs = options ? "?" + querystring.stringify(options) : "";

    let url = "/sep2020" + qs;
    let config = {
      method: "GET"
    };
    return this.request(url, config);
  }

}
