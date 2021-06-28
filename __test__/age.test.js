/*import { galacticAge } from './../src/age.js';

describe('galacticAge', () => {
  test('should test function that calculate galactic age using solar years', () => {
    const mercury_age = new Age(10);
    expect(mercury_age.mercuryAge(10)).toEqual("You are 41.66666666666667 mercury years old");
  });
})
*/

import Age, { mercuryAge } from './../src/age.js';
import { venusAge } from './../src/age.js';
import { marsAge } from './../src/age.js';
import { jupiterAge } from './../src/age.js';

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

describe('marsAge', () => {
  test('should test function that converts user inputted age to marsAge age', () => {
    const mars_age = new Age(10);
    expect(mars_age.marsAge(10)).toEqual("You are 6 mars years old");
  });
})

describe('jupiterAge', () => {
  test('should test function that converts user inputted age to jupiterAge age', () => {
    const jupiter_age = new Age(10);
    expect(jupiter_age.jupiterAge(10)).toEqual("You are 1 jupiter years old");
  });
})