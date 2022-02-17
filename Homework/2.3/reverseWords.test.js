import { reverseWords } from './reverseWords';

describe.skip('Describe reverseWords', () => {
  test('Should return sentence with reversed words', () => {
    expect(reverseWords('double  spaces'))
      .toStrictEqual('elbuod  secaps');
  });

  test('Should return sentence with reversed words', () => {
    expect(reverseWords('The quick brown fox jumps over the lazy dog.'))
      .toStrictEqual('ehT kciuq nworb xof spmuj revo eht yzal .god');
  });
});
