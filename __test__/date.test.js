import { leapYear } from './../src/date.js';
import { yearCodeGenerator } from './../src/date.js';
import { monthCodeLeapYear } from './../src/date.js';
import { monthCodeGenerator } from './../src/date.js';
import { tabulate } from './../src/date.js';
import { dayCodeConverter } from './../src/date.js';

describe('leapYear', () => {
  test('should test if user input for year is a leap year', () => {
    expect(leapYear(2020)).toEqual(true);
  });
})

describe('yearCodeGenerator', () => {
  test('should test that function returns year code', () => {
    expect(yearCodeGenerator('2061')).toEqual(6);
  });
})

describe('monthCodeLeapYear', () => {
  test('should test that function returns 5 and 1 for January and Feburary respectively', () => {
    expect(monthCodeLeapYear('February', 2020)).toEqual(1);
  });
})

describe('monthCodeGenerator', () => {
  test('should test that function returns month code for month enetered by user', () => {
    expect(monthCodeGenerator('January')).toEqual(6);
  });
})

describe('tabulate', () => {
  test('should test that function returns day code for January 21 2020', () => {
    expect(tabulate(5, 4, 21)).toEqual(2);
  });
})

describe('dayCodeConverter', () => {
  test('should test that function returns a day when dayCode is inputted', () => {
    expect(dayCodeConverter(1)).toEqual('Monday');
  });
})



