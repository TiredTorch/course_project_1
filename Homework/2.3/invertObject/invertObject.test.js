import { invertObject } from './invertObject';


describe.skip('Describe invertObject', () => {

  test('Should return empty object when empty object is passed', () => {
    const result = invertObject({});

    expect(result).toStrictEqual({});
  });

  test('Should return {\'bar\': \'foo\'} when {\'foo\': \'bar\'} is passed', () => {
    const result = invertObject({'foo': 'bar'});

    expect(result).toStrictEqual({'bar': 'foo'});
  });

  test('Should return {\'2\': \'1\', \'4\': \'2\', \'6\': \'3\'} ' 
  + ' when {\'1\': 2, \'2\': 4, \'3\': 6,} is passed', () => {
    const result = invertObject({
      '1': 2, '2': 4, '3': 6,
    });

    expect(result).toStrictEqual({
      '2': '1', '4': '2', '6': '3',
    });
  });

  test('Should return null when {"foo": "bar", "hello": "world", "js": "bar" } is passed', () => {
    const result = invertObject({
      'foo': 'bar', 'hello': 'world', 'js': 'bar',
    });

    expect(result).toStrictEqual(null);
  });

  test('Should throw an error', () => {
    const result = () => invertObject('f');

    expect(result).toThrow(new TypeError('You should enter object'));
  });
});