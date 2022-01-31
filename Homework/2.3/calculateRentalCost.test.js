import { calculateRentalCost } from './calculateRentalCost';

describe('Describe calculateRentalCost', () => {
  test('Should return "80" when passed "2"', () => {
    expect(calculateRentalCost(2)).toBe(80);
  });

  test('Should return "100" when passed "3"', () => {
    expect(calculateRentalCost(3)).toBe(100);
  });
  
  test('Should return "230" when passed "7"', () => {
    expect(calculateRentalCost(7)).toBe(230);
  });
  
});
