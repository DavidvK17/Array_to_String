'use strict';

// Arrays with forecasted max temperatures
const temperaturesOne = [17, 21, 23];
const temperaturesTwo = [12, 5, -5, 0, 4];

// Challenge: Thermometer displays string like ...17°C in 1 days ...21°C in 2 days

const printForecast = arr => {
  let str = '';
  arr.forEach((val, i) => (str += `...${val}°C in ${i + 1} days `));
  console.log(str);
};

printForecast(temperaturesOne);
printForecast(temperaturesTwo);
