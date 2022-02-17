import { fearNotLetter } from './fearNotLetter';

describe.skip('Describe fearNotLetter', () => {

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

  test('Should throw an error', () => {
    const result = () => fearNotLetter('sltvwx');

    expect(result).toThrow(new TypeError('Input does not preserve alphabetical order'));
  });

  test('Should throw an error', () => {
    const result = () => fearNotLetter('lwx');

    expect(result).toThrow(new TypeError('Skipped more then one letter in order'));
  });

  test('Should throw an error', () => {
    const result = () => fearNotLetter('lvx');

    expect(result).toThrow(new TypeError('Skipped more then one letter in order'));
  });
});

