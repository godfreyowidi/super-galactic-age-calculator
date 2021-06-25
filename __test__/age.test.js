import { mercuryAge } from './../src/age.js';
import { venusAge } from './../src/age.js';

describe('mercuryAge', () => {
  test('should test function that converts user inputted age to mercury age', () => {
    expect(mercuryAge(10)).toEqual("You are 41.66666666666667 mercury years old");
  });
})


describe('venusAge', () => {
  test('should test function that converts user inputted age to venusAge age', () => {
    expect(venusAge(10)).toEqual("You are 16.129032258064516 venus years old");
  });
})