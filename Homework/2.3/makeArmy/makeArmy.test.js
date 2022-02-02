import { makeArmy } from './makeArmy';


describe('Describe makeArmy', () => {

  const shooters = makeArmy(10);

  test('Should return 0 when shooters[0]() is passed', () => {
    const result = shooters[0]();

    expect(result).toStrictEqual(0);
  });

  test('Should return 5 when shooters[5]() is passed', () => {
    const result = shooters[5]();

    expect(result).toStrictEqual(5);
  });

  test('Should return 9 when shooters[9]() is passed', () => {
    const result = shooters[9]();

    expect(result).toStrictEqual(9);
  });

});