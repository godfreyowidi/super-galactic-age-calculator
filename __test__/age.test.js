import Age, { mercuryAge } from './../src/age.js';
import { venusAge } from './../src/age.js';
import { marsAge } from './../src/age.js';
import { jupiterAge } from './../src/age.js';

describe('mercuryAge', () => {
  test('should test function that converts user inputted age to mercury age', () => {
    const mercury_age = new Age(10);
    expect(mercury_age.mercuryAge(10)).toEqual("You are 41.66666666666667 mercury years old");
  });
})

describe('venusAge', () => {
  test('should test function that converts user inputted age to venusAge age', () => {
    const venus_age = new Age(10);
    expect(venus_age.venusAge(10)).toEqual("You are 16.129032258064516 venus years old");
  });
})

describe('marsAge', () => {
  test('should test function that converts user inputted age to marsAge age', () => {
    const mars_age = new Age(10);
    expect(mars_age.marsAge(10)).toEqual("You are 5.555555555555555 mars years old");
  });
})

describe('jupiterAge', () => {
  test('should test function that converts user inputted age to jupiterAge age', () => {
    const jupiter_age = new Age(10);
    expect(jupiter_age.jupiterAge(10)).toEqual("You are 0.8431703204047218 jupiter years old");
  });
})