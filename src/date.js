export function leapYear(year) {
  parseInt(year);
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

export function monthCodeGenerator(month) {
  let monthCode = monthCodeObj[month];
  return monthCode;
}

export function tabulate(monthCode, yearCode, date) {
  parseInt(date);
  let day = (monthCode + date + yearCode) % 7;
  return day;
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

export function dayCodeConverter(dayCode) {
  dayCode.toString();
  let day = dayCodeObj[dayCode];
  return day;
}

// Month Code (get from monthCodeObj) + Day (get from user Input) + Year Code (We have to calculate) = Answer / 7 remainder is day of week



// const monthCodeArray = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4]


// export function monthCodeGenerator(month) {
//   let monthCode;
//   if (month === January)
//   return monthCode = 6;
// } else if (month === February) {
//   return monthCode = 2;
// }

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

