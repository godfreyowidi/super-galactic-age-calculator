import Age, { mercuryAge } from './../src/age.js';
import Age, { venusAge } from './../src/age.js';

describe('mercuryAge', () => {
  test('should test function that converts user inputted age to mercury age', () => {
    const mercury_age = new Age(10);
    expect(mercury_age.mercuryAge(10)).toEqual("You are 42 mercury years old");
  });
})

describe('venusAge', () => {
  test('should test function that converts user inputted age to venusAge age', () => {
    const venus_age = new Age(10);
    expect(venus_age.venusAge(10)).toEqual("You are 16 venus years old");
  });
})