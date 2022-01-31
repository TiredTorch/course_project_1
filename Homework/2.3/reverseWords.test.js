import { reverseWords } from './reverseWords';

describe('Describe reverseWords', () => {
  test('Should return sentence with reversed words', () => {
    expect(reverseWords('double  spaces'))
      .toStrictEqual('elbuod  secaps');
  });
});
