import {vowelCount} from './vowelCount';

describe.skip('Describe vowelCount', () => {
  test('Should return "5" when passed "abracadabra"', () => {
    expect(vowelCount('abracadabra')).toBe(5);
  });

  test('Should return "2" when passed "letter"', () => {
    expect(vowelCount('letter')).toBe(2);
  });

  test('Should return "1" when passed "toy"', () => {
    expect(vowelCount('toy')).toBe(1);
  });

  test('Should return "0" when passed "555"', () => {
    expect(vowelCount('555')).toBe(0);
  });
});


