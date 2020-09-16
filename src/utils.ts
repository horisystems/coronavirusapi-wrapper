import { TimeSeriesCountry, TimeSeriesType } from "./types";

export const US: TimeSeriesCountry = "us";
export const Global: TimeSeriesCountry = "global";

export const Deaths: TimeSeriesType = "deaths";
export const Recovered: TimeSeriesType = "recovered";
export const Confirmed: TimeSeriesType = "confirmed";

export const datesAbr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const timeSeriesProps = [
  "admin2",
  "code3",
  "fips",
  "combined_key",
  "country_region",
  "id",
  "uid",
  "iso2",
  "iso3",
  "latitude",
  "longitude",
  "population",
  "province_state",
];
