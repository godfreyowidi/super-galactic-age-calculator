import { lifeExpectancyBasedOnAge } from './../src/life.js';
import { lifeExpectancyBasedOnSex } from './../src/life.js';
import { tabulate } from './../src/life.js';

describe('lifeExpectancyBasedOnAge', () => {
  test('should test function that divides the user inputted age by 2', () => {
    expect(lifeExpectancyBasedOnAge(10)).toEqual(5);
  });
})

describe('lifeExpectancyBasedOnSex', () => {
  test('should test function that provides a value based on user sex', () => {
    expect(lifeExpectancyBasedOnSex("male")).toEqual(30);
  });
})

describe('tabulate', () => {
  test('should test function that tabulate life expectancy based on age and sex', () => {
    expect(tabulate(5, 30)).toEqual(35);
  });
})



