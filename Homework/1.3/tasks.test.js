import {basicOp} from './task1';
import {stringMerge} from './task2';
import {createPhoneNumber} from './task3';
import {getOperands} from './task4';
import {getTime} from './task5';
import {getTimeEx} from './task5WithRegex';
import {isPalindrome} from './task6';
import {swapCase} from './task7';
import {countOccurrences} from './task8';
import {vowelCount} from './task9';
import {alphabetPosition} from './task10';

describe('Describe basicOp', () => {
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

describe('Describe stringMerge', () => {
  test('Should return held when passed "hello", "world" and "l"', () => {
    expect(stringMerge('hello', 'world', 'l')).toBe('held');
  });

  test('Should return codinywhere when passed "coding", "anywhere", "n"', () => {
    expect(stringMerge('coding', 'anywhere', 'n')).toBe('codinywhere');
  });

  test('Should return jasamson when passed "jason", "samson", "s"', () => {
    expect(stringMerge('jason', 'samson', 's')).toBe('jasamson');
  });

  test('Should return held when passed "wonderful", "people", "e"', () => {
    expect(stringMerge('wonderful', 'people', 'e')).toBe('wondeople');
  });
});

describe('Describe createPhoneNumber', () => {
  test('Should return "(123) 456-7890" when passed [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890');
  });
    
});

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

describe('Describe getTime', () => {
  test('Should return "09:00" when passed "Breakfast at 09:00"', () => {
    expect(getTime('Breakfast at 09:00')).toBe('09:00');
  });

  test('Should return "21:00" when passed "Breakfast at 09:60, Dinner at 21:00"', () => {
    expect(getTime('Breakfast at 09:60, Dinner at 21:00')).toBe('21:00');
  });

  test('Should return "09:59" when passed "Breakfast at 09:59, Dinner at 21:00"', () => {
    expect(getTime('Breakfast at 09:59, Dinner at 21:00')).toBe('09:59');
  });

  test('Should return " " when passed "Breakfast at, Dinner at"', () => {
    expect(getTime('Breakfast at, Dinner at')).toBe('');
  });
});

describe('Describe getTimeEx', () => {
  test('Should return "09:00" when passed "Breakfast at 09:00"', () => {
    expect(getTimeEx('Breakfast at 09:00')).toBe('09:00');
  });

  test('Should return "21:00" when passed "Breakfast at 09:60, Dinner at 21:00"', () => {
    expect(getTimeEx('Breakfast at 09:60, Dinner at 21:00')).toBe('21:00');
  });

  test('Should return "09:59" when passed "Breakfast at 09:59, Dinner at 21:00"', () => {
    expect(getTimeEx('Breakfast at 09:59, Dinner at 21:00')).toBe('09:59');
  });

  test('Should return " " when passed "Breakfast at, Dinner at"', () => {
    expect(getTimeEx('Breakfast at, Dinner at')).toBe('');
  });
});

describe('Describe isPalindrome', () => {
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

describe('Describe swapCase', () => {
  test('Should return "AbC" when passed "aBc"', () => {
    expect(swapCase('aBc')).toBe('AbC');
  });

  test('Should return "gOOd" when passed "GooD"', () => {
    expect(swapCase('GooD')).toBe('gOOd');
  });

  test('Should return "HELLO" when passed "hello"', () => {
    expect(swapCase('hello')).toBe('HELLO');
  });
});

describe('Describe countOccurrences', () => {
  test('Should return "2" when passed "ability and i"', () => {
    expect(countOccurrences('ability', 'i')).toBe(2);
  });

  test('Should return "1" when passed "abc and a"', () => {
    expect(countOccurrences('abc', 'a')).toBe(1);
  });

  test('Should return "1" when passed "ABC and a"', () => {
    expect(countOccurrences('ABC', 'a')).toBe(1);
  });
});

describe('Describe vowelCount', () => {
  test('Should return "5" when passed "abracadabra"', () => {
    expect(vowelCount('abracadabra')).toBe(5);
  });

  test('Should return "2" when passed "letter"', () => {
    expect(vowelCount('letter')).toBe(2);
  });

  test('Should return "1" when passed "toy"', () => {
    expect(vowelCount('toy')).toBe(1);
  });

  test('Should return "0" when passed "555"', () => {
    expect(vowelCount('555')).toBe(0);
  });
});

describe('Describe alphabetPosition', () => {
  test('Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"'
  + ' when passed "The sunset sets at twelve o\' clock."', () => {
    expect(alphabetPosition('The sunset sets at twelve o\' clock.'))
      .toBe('20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11');
  });
});


