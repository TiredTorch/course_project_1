import { invertColor } from './invertColor';


describe.skip('Describe invertColor', () => {
  test('Should return #ffffff when passed #000000', () => {
    expect(invertColor('#000000'))
      .toBe('#ffffff');
  });

  test('Should return #ffffff when passed #DDEEAA', () => {
    expect(invertColor('#DDEEAA'))
      .toBe('#221155');
  });

  test('Should return #fedcba when passed #012345', () => {
    expect(invertColor('#012345'))
      .toBe('#fedcba');
  });
});