import { createAdder } from './createAdder';

describe('Describe createAdder', () => {
  const adder1 = createAdder('f');
  const adder2 = createAdder(100);

  test('Should return 0 (sum of previous value) when nothing is passed', () => {
    const result = adder1();

    expect(result).toBe(0);
  });

  test('Should return 30 (sum of previous value) when passed 10, 20', () => {
    const result = adder1(10, 20);

    expect(result).toBe(30);
  });

  test('Should return 100 (sum of previous value) when passed 30, 40', () => {
    const result = adder1(30, 40);

    expect(result).toBe(100);
  });


  test('Should return 110 (sum of previous value) when passed 10', () => {
    const result = adder2(10);

    expect(result).toBe(110);
  });

  test('Should return 200 (sum of previous value) when passed 20, 30, 40', () => {
    const result = adder2(20, 30, 40);

    expect(result).toBe(200);
  });

  test('Should return 200 (sum of previous value) when nothing is passed', () => {
    const result = adder2();

    expect(result).toBe(200);
  });
});