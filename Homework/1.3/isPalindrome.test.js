import {isPalindrome} from './isPalindrome';

describe.skip('Describe isPalindrome', () => {
  test('Should return "true" when passed "Eva, can I see bees in a cave?"', () => {
    expect(isPalindrome('Eva, can I see bees in a cave?')).toBe(true);
  });

  test('Should return "false" when passed "race a car"', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  test('Should return "true" when passed "Was it a cat I saw?"', () => {
    expect(isPalindrome('Was it a cat I saw?')).toBe(true);
  });
    
});
