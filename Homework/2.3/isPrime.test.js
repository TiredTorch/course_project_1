import { isPrime } from './isPrime';


describe.skip('Describe isPrime', () => {
  test('Should return "true" when passed "2"', () => {
    expect(isPrime(2)).toBe(true);
  });

  test('Should return "true" when passed "73"', () => {
    expect(isPrime(73)).toBe(true);
  });
  
  test('Should return "false" when passed "1"', () => {
    expect(isPrime(1)).toBe(false);
  });
  
  test('Should return "false" when passed "75"', () => {
    expect(isPrime(75)).toBe(false);
  });
  
  test('Should return "false" when passed "-1"', () => {
    expect(isPrime(-1)).toBe(false);
  });
});
