import { squareList } from './squareList';


describe('Describe squareList', () => {

  test('Should return [16, 1764, 36] when [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2] is passed', () => {
    const result = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);

    expect(result).toStrictEqual([16, 1764, 36]);
  });

  test('Should return [9, 100, 49] when [-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3] is passed', () => {
    const result = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);

    expect(result).toStrictEqual([9, 100, 49]);
  });
});