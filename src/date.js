export function leapYear(year) {
  if (year % 4 === 0) {
    return true;
  }
};

export function yearCodeGenerator(year) {
  let yy = parseInt(year.slice(year.length - 2));
  let yearCode = (Math.floor(yy / 4) + yy) % 7;
  return yearCode;
}

export function monthCodeLeapYear(month, year) {
  let monthCode;
  if (leapYear(year) && month === "January") {
    return monthCode = 5;
  } else if (leapYear(year) && month === "February") {
    return monthCode = 1;
  }
}

// 2. Code for every year
//   1. Take last 2 digits of any year
//   2. Divide by 4 and ignore the remainder
//   3. If no remainder its a Leap year and the January code is 5 and Febuary code is 1
//   4. If its not a leap year then add that answer to the last 2 digits of the year
//   5. Divide by 7 and the remainder is the code
//export const dateCodeObj = {
//   Monday: 1,
//   Tuesday: 2, 
//   Wednesday: 3,
//   Thursday: 4,
//   Friday: 5,
//   Saturday: 6,
//   Sunday: 7
// }

// Test for LeapYear

