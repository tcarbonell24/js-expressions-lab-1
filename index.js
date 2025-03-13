//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

const day1TempF = 32;
const day2TempF = 77;
const day3TempF = 70
const day4TempF = 64.4
const day5TempF = 80
const day6TempF = 59
const day7TempF = 72
const day8TempF = 82.4
const day9TempF = 68
const day10TempF = 68
const day11TempF = 75
const day12TempF = 73.4
const day13TempF = 82
const day14TempF = 86
const day15TempF = 65
const day16TempF = 71.6
const day17TempF = 77
const day18TempF = 78.8
const day19TempF = 78
const day20TempF = 75.2
const day21TempF = 73
const day22TempF = 69.8
const day23TempF = 79
const day24TempF = 80.6
const day25TempF = 71
const day26TempF = 66.2
const day27TempF = 74
const day28TempF = 62.6
const day29TempF = 76
const day30TempF = 84.2

let days = 30;

let tot_temperature_in_fahrenheit = day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF + day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF + day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF + day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF + day25TempF + day26TempF + day27TempF + day28TempF + day29TempF + day30TempF;
let tot_temperature_in_celsius = (tot_temperature_in_fahrenheit - (32)) * 5 / 9;
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / days;
let avg_temperature_in_celsius = tot_temperature_in_celsius / days;


console.log("Total temp in F: " + tot_temperature_in_fahrenheit)
console.log("Average temp in F: " + avg_temperature_in_fahrenheit)
console.log("Total temp in C: " + tot_temperature_in_celsius)
console.log("Average temp in C: " + avg_temperature_in_celsius)

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};