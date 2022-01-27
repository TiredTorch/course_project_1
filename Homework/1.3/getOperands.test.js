import {getOperands} from './getOperands';

describe('Describe getOperands', () => {
  test('Should return "a: 1, b: 2;" when passed "1 + 2"', () => {
    expect(getOperands('1 + 2')).toBe('a: 1, b: 2;');
  });

  test('Should return "a: 1.2, b: -3.4;" when passed "1.2 * -3.4"', () => {
    expect(getOperands('1.2 * -3.4')).toBe('a: 1.2, b: -3.4;');
  });
 
  test('Should return "a: 1, b: 2;" when passed "1 - 2"', () => {
    expect(getOperands('1 - 2')).toBe('a: 1, b: 2;');
  });

  test('Should return "a: 1, b: -2;" when passed "1 - -2"', () => {
    expect(getOperands('1 - -2')).toBe('a: 1, b: -2;');
  });
    
});