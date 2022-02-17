import { openOrSenior } from './openOrSenior';

describe.skip('Describe openOrSenior', () => {
  test('Should return "[Open, Senior, Open, Senior]" when passed "[[31, 10],[55,23],[20, 0],[41, 16]]"', () => {
    expect(openOrSenior([[31, 10],[55,23],[20, 0],[41, 16]]))
      .toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);
  });

  test('Should return "[Open, Open, Open, Open]" when passed "[[34, 11],[55,7],[39, 16],[38, 14]]"', () => {
    expect(openOrSenior([[34, 11],[55,7],[39, 16],[38, 14]]))
      .toStrictEqual(['Open', 'Open', 'Open', 'Open']);
  });
  
});
