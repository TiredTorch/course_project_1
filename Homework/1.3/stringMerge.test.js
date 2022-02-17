import {stringMerge} from './stringMerge';

describe.skip('Describe stringMerge', () => {
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
