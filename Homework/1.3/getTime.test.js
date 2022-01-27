import {getTime} from './getTime';

describe('Describe getTime', () => {
  test('Should return "09:00" when passed "Breakfast at 09:00"', () => {
    expect(getTime('Breakfast at 09:00')).toBe('09:00');
  });

  test('Should return "21:00" when passed "Breakfast at 09:60, Dinner at 21:00"', () => {
    expect(getTime('Breakfast at 09:60, Dinner at 21:00')).toBe('21:00');
  });

  test('Should return "09:59" when passed "Breakfast at 09:59, Dinner at 21:00"', () => {
    expect(getTime('Breakfast at 09:59, Dinner at 21:00')).toBe('09:59');
  });

  test('Should return " " when passed "Breakfast at, Dinner at"', () => {
    expect(getTime('Breakfast at, Dinner at')).toBe('');
  });
});
