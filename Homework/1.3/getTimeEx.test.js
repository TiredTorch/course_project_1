import {getTimeEx} from './getTimeEx';

describe('Describe getTimeEx', () => {
  test('Should return "09:00" when passed "Breakfast at 09:00"', () => {
    expect(getTimeEx('Breakfast at 09:00')).toBe('09:00');
  });

  test('Should return "21:00" when passed "Breakfast at 09:60, Dinner at 21:00"', () => {
    expect(getTimeEx('Breakfast at 09:60, Dinner at 21:00')).toBe('21:00');
  });

  test('Should return "09:59" when passed "Breakfast at 09:59, Dinner at 21:00"', () => {
    expect(getTimeEx('Breakfast at 09:59, Dinner at 21:00')).toBe('09:59');
  });

  test('Should return " " when passed "Breakfast at, Dinner at"', () => {
    expect(getTimeEx('Breakfast at, Dinner at')).toBe('');
  });
});
