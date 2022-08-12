<<<<<<< HEAD
import CoronaVirusApiWrapper from "./CoronaVirusApiWrapper";
import { Confirmed, Deaths, Global, Recovered, US } from "./utils";

export { Confirmed, Deaths, Global, Recovered, US };
export default CoronaVirusApiWrapper;
=======
export { sdk } from "./sdk";
import { GlobalConfirmed } from "./apis/global_confirmed";
import { USConfirmed } from "./apis/us_confirmed";
import { GlobalDeath } from "./apis/global_death";
import { GlobalDailyReport } from "./apis/global_daily_report";
import { USDeath } from "./apis/us_death";
import { GlobalRecovered } from "./apis/global_recovered";

export const globalConfirmed = new GlobalConfirmed();
export const globalDeath = new GlobalDeath();
export const globalDailyReport = new GlobalDailyReport();
export const globalRecovered = new GlobalRecovered();
export const usConfirmed = new USConfirmed();
export const usDeath = new USDeath();
>>>>>>> 41073ea (v3.0.1)
