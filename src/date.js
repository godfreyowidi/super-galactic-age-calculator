//Date Object
export default function Date(month, year, day) {
  this.month = month;
  this.year = year;
  this.day = day;
}

//Objects
const monthCodeObj = {
  January: 6,
  February: 2,
  March: 2,
  April: 5,
  May: 0,
  June: 3,
  July: 5,
  August: 1,
  September: 4,
  October: 6,
  November: 2,
  December: 4
}

const dayCodeObj = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
}

//Month Code Functions
export function monthCodeGenerator(month, year) {
  let monthCode; 
  if (!leapYear(year)) {
    return monthCode = monthCodeObj[month];
  } else if (leapYear(year)) {
    return monthCode = monthCodeLeapYear(month, year);
  }
}

// leap Year Functions
export function leapYear(year) {
  parseInt(year);
  if (year % 4 === 0) {
    return true;
  }
}

export function monthCodeLeapYear(month, year) {
  let monthCode;
  if (leapYear(year) && month === "January") {
    return monthCode = 5;
  } else if (leapYear(year) && month === "February") {
    return monthCode = 1;
  }
}

//Year Code Functions
export function yearCodeGenerator(year) {
  let yy = parseInt(year.slice(year.length - 2));
  let yearCode = (Math.floor(yy / 4) + yy) % 7;
  return yearCode;
}

//Day of the week calculator
export function tabulate(date, monthCode, yearCode) {
  let dayCode = (date + monthCode + yearCode) % 7;
  dayCode.toString();
  let day = dayCodeObj[dayCode];
  return day;
}



