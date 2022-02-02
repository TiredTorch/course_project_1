import { createPrevArgSaver } from './createPrevArgSaver';

describe('Describe createPrevArgSaver', () => {
  const argSaver = createPrevArgSaver();

  test('Should return undefined (origin value) when passed 123', () => {
    const result = argSaver(123);

    expect(result).toBe(undefined);
  });

  test('Should return 123 (previous value) when passed 456', () => {
    const result = argSaver(456);

    expect(result).toBe(123);
  });

  test('Should return 456 (previous value) when passed 100, 200, 300', () => {
    const result = argSaver(100, 200, 300);

    expect(result).toBe(456);
  });

  test('Should return 100 (previous value) when nothing is passed ', () => {
    const result = argSaver();

    expect(result).toBe(100);
  });

  test('Should return undefined (previous value) when passed 741', () => {
    const result = argSaver(741);

    expect(result).toBe(undefined);
  });
  
});
