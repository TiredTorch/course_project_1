import {countOccurrences} from './countOccurrences';


describe('Describe countOccurrences', () => {
  test('Should return "2" when passed "ability and i"', () => {
    expect(countOccurrences('ability', 'i')).toBe(2);
  });

  test('Should return "1" when passed "abc and a"', () => {
    expect(countOccurrences('abc', 'a')).toBe(1);
  });

  test('Should return "1" when passed "ABC and a"', () => {
    expect(countOccurrences('ABC', 'a')).toBe(1);
  });
});
