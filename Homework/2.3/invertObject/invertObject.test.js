import { invertObject } from './invertObject';


describe('Describe createPrevArgSaver', () => {

  test('Should return empty object when empty object is passed', () => {
    const result = invertObject({});

    expect(result).toStrictEqual({});
  });

  test('Should return  when  is passed', () => {
    const result = invertObject({'foo': 'bar'});

    expect(result).toStrictEqual({'bar': 'foo'});
  });

  test('Should return  when  is passed', () => {
    const result = invertObject({
      '1': 2, '2': 4, '3': 6,
    });

    expect(result).toStrictEqual({
      '2': '1', '4': '2', '6': '3',
    });
  });

  test('Should return  when  is passed', () => {
    const result = invertObject({
      'foo': 'bar', 'hello': 'world', 'js': 'bar',
    });

    expect(result).toStrictEqual(null);
  });
});