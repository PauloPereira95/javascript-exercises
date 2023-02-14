const convertToCelsius = function(fai) {
  let temp = Math.round(((fai - 32) / 1.8) * 10) / 10;
    //temp = temp.toFixed(1);
  return temp;
};

const convertToFahrenheit = function(cel) {
  let temp = Math.round(((cel * 1.8) + 32) * 10) / 10;
  //temp =  temp.toFixed(1);

  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
