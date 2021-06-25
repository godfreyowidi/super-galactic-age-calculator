import { mercuryAge } from './../src/age.js';
import { venusAge } from './../src/age.js';
import { marsAge } from './../src/age.js';
import { jupiterAge } from './../src/age.js';

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

describe('marsAge', () => {
  test('should test function that converts user inputted age to marsAge age', () => {
    expect(marsAge(10)).toEqual("You are 5.555555555555555 mars years old");
  });
})

describe('jupiterAge', () => {
  test('should test function that converts user inputted age to jupiterAge age', () => {
    expect(jupiterAge(10)).toEqual("You are 0.8431703204047218 jupiter years old");
  });
})