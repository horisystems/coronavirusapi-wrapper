import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import CoronaVirusApiWrapper from '../src/index';

describe('CoronaVirusApiWrapper Library', function () {
  it('should create an instance of CoronaVirusApiWrapper', () => {
    let api = new CoronaVirusApiWrapper({});
    expect(api).to.be.an.instanceof(CoronaVirusApiWrapper);
  });

  it('should receive apiURL as an option', () => {
    let api = new CoronaVirusApiWrapper({
      apiURL: 'blabla'
    });

    expect(api.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    let api = new CoronaVirusApiWrapper({});
    expect(api.apiURL).to.be.equal('https://covid19.cloudeya.org');
  });

  it('should receive token as an option', () => {
    let api = new CoronaVirusApiWrapper({
      token: 'foo'
    });

    expect(api.token).to.be.equal('foo');
  });

  describe('request method', () => {
    let stubedFetch;

    beforeEach( () => {
      stubedFetch = sinon.stub(global, 'fetch');
      stubedFetch.resolves({ json: () => {} });
    });

    afterEach( () => {
      stubedFetch.restore();
    });

    it('should have request method', () => {
      let api = new CoronaVirusApiWrapper({});

      expect(api.request).to.exist;
    });
  });
});
