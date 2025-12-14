const convertToCelsius = function(fahren) {
  let num = (fahren-32)*5/9;
  num = Math.round(num*10)/10;
  return num
};

const convertToFahrenheit = function(celsius) {
  let num = (9*celsius)/5 + 32;
  num = Math.round(num*10)/10;
  return num
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
