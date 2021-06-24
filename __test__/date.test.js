import { leapYear } from './../src/date.js';
import { yearCodeGenerator } from './../src/date.js';

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