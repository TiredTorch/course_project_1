import {vowelCountWithRegex} from './vowelCountWithRegex';

describe('Describe vowelCount', () => {
  test('Should return "5" when passed "abracadabra"', () => {
    expect(vowelCountWithRegex('abracadabra')).toBe(5);
  });

  test('Should return "2" when passed "letter"', () => {
    expect(vowelCountWithRegex('letter')).toBe(2);
  });

  test('Should return "1" when passed "toy"', () => {
    expect(vowelCountWithRegex('toy')).toBe(1);
  });

  test('Should return "0" when passed "555"', () => {
    expect(vowelCountWithRegex('555')).toBe(0);
  });
});


