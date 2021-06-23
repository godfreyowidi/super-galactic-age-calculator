import { leapYear } from './../src/date.js';

describe('leapYear', () => {

  test('should test if user input for year is a leap year', () => {
    expect(leapYear(2020)).toEqual(true);
  });
})