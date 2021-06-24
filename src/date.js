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



