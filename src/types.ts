// GlobalDailyReport the Global Daily Reports
export interface IGlobalDailyReport {
  Code: number;
  Message: string;
  Document: IReport[];
}

// Report holds the cases data for each month (the reports inside document)
export interface IReport {
  id: number;
  province_state: string;
  country_region: string;
  last_update: string;
  confirmed: number;
  deaths: number;
  recovered: number;
  active: number;
  fips: string;
  admin2: string;
  case_fatality_ratio: number;
  combined_key: string;
  incidence_rate: number;
}

// TimeSeriesSummary Time Series Summary
export interface ITimeSeriesSummary {
  Code: number;
  Message: string;
  Reports: ITimeSeriesReport[];
}

// TimeSeriesReport holds the time series data
export interface ITimeSeriesReport {
  ID: number;
  UID: number;
  ISO2: string;
  ISO3: string;
  Code3: number;
  FIPS: number;
  Admin2: string;
  CombinedKey: string;
  ProvinceState: string;
  CountryRegion: string;
  Latitude: number;
  Longitude: number;
  Population: number;
  Data: { [date: string]: number };
}

export type TimeSeriesType = "deaths" | "recovered" | "confirmed";

export type TimeSeriesCountry = "us" | "global";
