/* to run: babel-node examples/test.js */

global.fetch = require('node-fetch');

import CoronaVirusApiWrapper from '../src/index';

const api = new CoronaVirusApiWrapper({
  //token: process.env.SECRET
  // DON'T FORGET TO GENERATE YOUR OWN TOKEN!
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhcGkxIiwiaWF0IjoxNTk5Nzc1NTM0LCJleHAiOjE1OTk5NDU1MzR9.B-yFmxF-jo0ONyOsfxTCKcHlgu1uI7qHUVg6mWudFSc"
});

api
  .getSep2020({ username: "bearer", page: 1 })
  .then(data => console.log(data));
