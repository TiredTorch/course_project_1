import { fearNotLetter } from './fearNotLetter';

describe('Describe createPrevArgSaver', () => {

  test('Should return d when passed abce', () => {
    const result = fearNotLetter('abce');

    expect(result).toBe('d');
  });

  test('Should return i when passed abcdefghjklmno', () => {
    const result = fearNotLetter('abcdefghjklmno');

    expect(result).toBe('i');
  });

  test('Should return u when passed stvwx', () => {
    const result = fearNotLetter('stvwx');

    expect(result).toBe('u');
  });

  test('Should return undefined when passed abcdefghijklmnopqrstuvwxyz', () => {
    const result = fearNotLetter('abcdefghijklmnopqrstuvwxyz');

    expect(result).toBe(undefined);
  });
});

