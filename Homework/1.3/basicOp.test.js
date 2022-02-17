import {basicOp} from './basicOp';


describe.skip('Describe basicOp', () => {
  test('Should return 11 when passed 4, 7 and "+"', () => {
    expect(basicOp('+', 4, 7)).toBe(11);
  });

  test('Should return 11 when passed 4, 7 and "+"', () => {
    expect(basicOp('-', 15, 18)).toBe(-3);
  });

  test('Should return 11 when passed 4, 7 and "+"', () => {
    expect(basicOp('*', 5, 5)).toBe(25);
  });

  test('Should return 11 when passed 4, 7 and "+"', () => {
    expect(basicOp('/', 49, 7)).toBe(7);
  });

  test('Should return 0 when passed 45, 45 and wrong operation', () => {
    expect(basicOp('something else', 45, 45)).toBe(0);
  });
});
