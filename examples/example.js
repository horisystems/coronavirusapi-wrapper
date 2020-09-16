import CoronaVirusApiWrapper from 'coronavirusapi-wrapper';

const apiWrapper = new CoronaVirusApiWrapper({
  token: "Your_Token"
});


// Dailly reports at Jan-2020
apiWrapper.this.getReportsAt(new Date(Date.parse('jan-2020'))).then(function (d) {
  console.log("Dailly reports at Jan-2020");
  console.log({ code: d.Code, message: d.Message, 1: d.Document[0], 2: d.Document[1] });
});

// Dailly reports at Sep-2020
apiWrapper.getSep2020().then(function (d) {
  console.log("Dailly reports at Sep-2020");
  console.log({ code: d.Code, message: d.Message, 1: d.Document[0], 2: d.Document[1] });
});

// Get Confirmed cases TimeSeries at the US
apiWrapper.getTimeSeriesConfirmedUs().then(function (timeseries) {
  console.log("Confirmed cases TimeSeries at the US");
  console.log({ code: timeseries.Code, message: timeseries.Message, 1: timeseries.Reports[0].Data });
});
