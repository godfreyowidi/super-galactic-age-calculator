import { leapYear } from './../src/date.js';
import { yearCode } from './../src/date.js';

describe('leapYear', () => {
  test('should test if user input for year is a leap year', () => {
    expect(leapYear(2020)).toEqual(true);
  });
})

describe('yearCode', () => {
  test('should test that function returns the last two numbers in the year input', () => {
    expect(yearCode('2061')).toEqual(15);
  });
})