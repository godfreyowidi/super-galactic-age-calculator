import { lifeExpectancyBasedOnAge } from './../src/life.js';

describe('lifeExpectancyBasedOnAge', () => {
  test('should test function that divides the user inputted age by 2', () => {
    expect(lifeExpectancyBasedOnAge(10)).toEqual(5);
  });
})