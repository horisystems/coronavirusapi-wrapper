import CoronaVirusApiWrapper from '..';
import { IGlobalDailyReport, ITimeSeriesReport, ITimeSeriesSummary } from '../types';

(global as any).fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);


describe('CoronaVirusApiWrapper Library', function () {
  it('should create an instance of CoronaVirusApiWrapper', () => {
    const api = new CoronaVirusApiWrapper({});
    expect(api).toBeInstanceOf(CoronaVirusApiWrapper);
  });

  it('should receive apiURL as an option', () => {
    const api = new CoronaVirusApiWrapper({
      apiURL: 'blabla'
    });

    expect(api.apiURL).toBe('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    const api = new CoronaVirusApiWrapper({});
    expect(api.apiURL).toBe('https://covid19.cloudeya.org');
  });

  it('should receive token as an option', () => {
    const api = new CoronaVirusApiWrapper({
      token: 'foo'
    });

    expect(api.token).toBe('foo');
  });
  it('should request a token when provding username and password', async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        text: () => Promise.resolve("token"),
      })
    );
    const api = new CoronaVirusApiWrapper({
      username: 'foo',
      password: 'foo'
    });
    const token = await api.token;
    expect(token).toBe('token');
  });
  it('should get data when calling one of the dailly cases request- getAug2020', async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ Code: 198 }),
      })
    );
    const api = new CoronaVirusApiWrapper({
      token: "token"
    });
    const data: IGlobalDailyReport = await api.getAug2020() as IGlobalDailyReport;
    expect(data.Code).toBe(198);
  });
  it('should get data when calling one of the dailly cases request - getApr2020', async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ Code: 198 }),
      })
    );
    const api = new CoronaVirusApiWrapper({
      token: "token"
    });
    const data: IGlobalDailyReport = await api.getApr2020() as IGlobalDailyReport;
    expect(data.Code).toBe(198);
  });
  it('should get data even if token is undefined', async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ Code: 198 }),
      })
    );
    const api = new CoronaVirusApiWrapper({
    });
    const data: IGlobalDailyReport = await api.getApr2020() as IGlobalDailyReport;
    expect(data.Code).toBe(198);
  });

  it('should get data for timeseries', async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          Message: "Test", Document: [
            {
              admin2: "Test",
              code3: "test",
              sep022020: 787
            }
          ]
        }),
      })
    );
    const api = new CoronaVirusApiWrapper({
    });
    const data: ITimeSeriesSummary = await api.getTimeSeriesConfirmedGlobal() as ITimeSeriesSummary;
    expect(data.Message).toBe("Test");
  });
});
