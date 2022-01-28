import {countOccurrencesWithRegex} from './countOccurrencesWithRegex';


describe('Describe countOccurrencesWithRegex', () => {
  test('Should return "2" when passed "ability and i"', () => {
    expect(countOccurrencesWithRegex('ability', 'i')).toBe(2);
  });

  test('Should return "1" when passed "abc and a"', () => {
    expect(countOccurrencesWithRegex('abc', 'a')).toBe(1);
  });

  test('Should return "1" when passed "ABC and a"', () => {
    expect(countOccurrencesWithRegex('ABC', 'a')).toBe(1);
  });
});
