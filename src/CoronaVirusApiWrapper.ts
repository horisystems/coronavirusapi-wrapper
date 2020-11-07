import API_URL from "./config";
import {
  IGlobalDailyReport,
  ITimeSeriesReport,
  ITimeSeriesSummary,
  TimeSeriesCountry,
  TimeSeriesType,
} from "./types";
import {
  datesAbr,
  timeSeriesProps,
  Confirmed,
  Deaths,
  Global,
  Recovered,
  US,
} from "./utils";
export interface CoronaVirusApiWrapperConfig {
  token?: string;
  apiURL?: string;
  username?: string;
  password?: string;
  timeout?: number;
}

export default class CoronaVirusApiWrapper {
  public token?: string | Promise<string>;
  public apiURL: string;

  constructor(config: CoronaVirusApiWrapperConfig) {
    if (!config.token && config.password && config.username) {
      this.token = this.getTokenUsingCredentials(config.username, config.password);
    } else if (config.token) {
      this.token = config.token;
    }
    this.apiURL = config.apiURL || API_URL;
  }

  async getTokenUsingCredentials(
    username: string,
    password: string
  ): Promise<string> {
    const credentials = { username, password };
    const response = await fetch(`${this.apiURL}/token`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }
      ,
      body: JSON.stringify(credentials),
    });

    return response.text();
  }

  async getReportsAt(date: Date): Promise<IGlobalDailyReport | Error> {
    const monthYear = `${datesAbr[
      date.getMonth() - 1
    ].toLowerCase()}${date.getFullYear()}`;
    let headers: { [name: string]: string } = {
      "Content-type": "application/json",
    };
    const token = await this.token;
    if (token) {
      headers = {
        ...headers,
        "Authorization": "Bearer " + token
      }
    }
    try {
      const response = await fetch(`${this.apiURL}/${monthYear}`, {
        method: "GET",
        headers,
      });
      return response.json();
    } catch (err) {
      return Promise.resolve(err);
    }
  }

  getJan2020(): Promise<IGlobalDailyReport | Error> {
    return this.getReportsAt(new Date(Date.parse("jan-2020")));
  }

  getFeb2020(): Promise<IGlobalDailyReport | Error> {
    return this.getReportsAt(new Date(Date.parse("feb-2020")));
  }

  getMar2020(): Promise<IGlobalDailyReport | Error> {
    return this.getReportsAt(new Date(Date.parse("mar-2020")));
  }

  getApr2020(): Promise<IGlobalDailyReport | Error> {
    return this.getReportsAt(new Date(Date.parse("apr-2020")));
  }

  getMay2020(): Promise<IGlobalDailyReport | Error> {
    return this.getReportsAt(new Date(Date.parse("may-2020")));
  }

  getJun2020(): Promise<IGlobalDailyReport | Error> {
    return this.getReportsAt(new Date(Date.parse("jun-2020")));
  }

  getJul2020(): Promise<IGlobalDailyReport | Error> {
    return this.getReportsAt(new Date(Date.parse("jul-2020")));
  }

  getAug2020(): Promise<IGlobalDailyReport | Error> {
    return this.getReportsAt(new Date(Date.parse("aug-2020")));
  }

  getSep2020(): Promise<IGlobalDailyReport | Error> {
    return this.getReportsAt(new Date(Date.parse("sep-2020")));
  }

  getOct2020(): Promise<IGlobalDailyReport | Error> {
    return this.getReportsAt(new Date(Date.parse("oct-2020")));
  }

  getNov2020(): Promise<IGlobalDailyReport | Error> {
    return this.getReportsAt(new Date(Date.parse("nov-2020")));
  }

  async getTimeSeriesFor(
    type: TimeSeriesType,
    country: TimeSeriesCountry
  ): Promise<ITimeSeriesSummary | Error> {
    const url = `${this.apiURL}/time_series_${type}_${country}`;
    const bearer = `Bearer ${this.token}`;
    let headers: { [name: string]: string } = {
      "Content-type": "application/json",
    };
    const token = await this.token;
    if (token) {
      headers = {
        ...headers,
        "Authorization": "Bearer " + token
      }
    }
    try {
      const response = await fetch(url, {
        method: "GET",
        headers,
      });
      const data = await response.json();
      const timeSeriesSummary: ITimeSeriesSummary = {
        Code: data.Code,
        Message: data.Message,
        Reports: (data.Document as any[]).map((report) => {
          let reportData = {};
          const props = Object.keys(report);
          for (const key of props) {
            if (!timeSeriesProps.find((prop) => prop === key)) {
              reportData = {
                ...reportData,
                [key]: report[`${key}`],
              };
            }
          }
          const timeSeriesReport: ITimeSeriesReport = {
            Admin2: report.admin2,
            Code3: report.code3,
            FIPS: report.fips,
            CombinedKey: report.combined_key,
            CountryRegion: report.country_region,
            ID: report.id,
            UID: report.uid,
            ISO2: report.iso2,
            ISO3: report.iso3,
            Latitude: report.latitude,
            Longitude: report.longitude,
            Population: report.population,
            ProvinceState: report.province_state,
            Data: reportData,
          };
          return timeSeriesReport;
        }),
      };
      return timeSeriesSummary;
    } catch (err) {
      return Promise.resolve(err);
    }
  }

  getTimeSeriesConfirmedGlobal(): Promise<ITimeSeriesSummary | Error> {
    return this.getTimeSeriesFor(Confirmed, Global);
  }

  getTimeSeriesConfirmedUs(): Promise<ITimeSeriesSummary | Error> {
    return this.getTimeSeriesFor(Confirmed, US);
  }

  getTimeSeriesDeathsGlobal(): Promise<ITimeSeriesSummary | Error> {
    return this.getTimeSeriesFor(Deaths, Global);
  }

  getTimeSeriesDeathsUs(): Promise<ITimeSeriesSummary | Error> {
    return this.getTimeSeriesFor(Deaths, US);
  }

  getTimeSeriesRecoveredGlobal(): Promise<ITimeSeriesSummary | Error> {
    return this.getTimeSeriesFor(Recovered, Global);
  }
}
