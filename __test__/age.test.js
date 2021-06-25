import { mercuryAge } from './../src/age.js';

describe('mercuryAge', () => {
  test('should test if value of ages object is captured', () => {
    expect(mercuryAge(10)).toEqual("You are 41.66666666666667 mercury years old");
  });
})