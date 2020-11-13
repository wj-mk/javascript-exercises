const ftoc = function(farenheit) {

  let celcius = (farenheit - 32) * (5 / 9);

  return Math.round(celcius*10) / 10;
}

const ctof = function(celcius) {
  
  let farenheit = (celcius  * 9 / 5) + 32;

  return Math.round(farenheit * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
