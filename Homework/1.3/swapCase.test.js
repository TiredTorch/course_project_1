import {swapCase} from './swapCase';

describe('Describe swapCase', () => {
  test('Should return "AbC" when passed "aBc"', () => {
    expect(swapCase('aBc')).toBe('AbC');
  });

  test('Should return "gOOd" when passed "GooD"', () => {
    expect(swapCase('GooD')).toBe('gOOd');
  });

  test('Should return "HELLO" when passed "hello"', () => {
    expect(swapCase('hello')).toBe('HELLO');
  });
});
