import CoronaVirusApiWrapper from 'coronavirusapi-wrapper';

const apiWrapper = new CoronaVirusApiWrapper({
  token: "Your_Token"
});

// Daily Reports for January 2020
apiWrapper.this.getReportsAt(new Date(Date.parse('jan-2020'))).then(function (d) {
  console.log("Daily Reports for January 2020");
  console.log({ code: d.Code, message: d.Message, 1: d.Document[0], 2: d.Document[1] });
});

// Daily Reports for January 2021
apiWrapper.getJan2021().then(function (d) {
  console.log("Daily Reports for January 2021");
  console.log({ code: d.Code, message: d.Message, 1: d.Document[0], 2: d.Document[1] });
});

// Get Confirmed Cases TimeSeries in the US
apiWrapper.getTimeSeriesConfirmedUs().then(function (timeseries) {
  console.log("Confirmed Cases Time Series in the US");
  console.log({ code: timeseries.Code, message: timeseries.Message, 1: timeseries.Reports[0].Data });
});
