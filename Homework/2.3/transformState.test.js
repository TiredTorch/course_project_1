import { transformState } from './transformState';

describe.skip('Describe transformState', () => {
  test('Should work with a long list of operations', () => {
    const operatedObject = {
      foo: 'bar', name: 'Jim', another: 'one',
    };
    const operations = [
      {
        operation: 'addProperties', properties: {yet: 'another property'},
      }, 
      {operation: 'clear'},
      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim',
        },
      },
    ];
    const result = transformState(operatedObject, operations);
    const expectedResult =  {
      foo: 'bar', name: 'Jim',
    };

    expect(result).toStrictEqual(expectedResult);
  });

  test('Should return {name: Jim} when adding corresponding property', () => {
    expect(transformState({},
      [
        {
          operation: 'addProperties', properties: { name: 'Jim' },
        },
      ],
        
    ))
      .toStrictEqual({name: 'Jim'});
  });

  test('Should clear the state', () => {
    expect(transformState({
      foo: 'bar', name: 'Jim', another: 'one',
    },
    [
      { operation: 'clear' },
    ],
    ))
      .toStrictEqual({});
  });

  test('Should work with a long list of operations', () => {
    const operatedObject = {
      foo: 'bar', name: 'Jim', another: 'one',
    };
    const operations = [
      {
        operation: 'removeProperties', properties: ['another'],
      },
      { operation: 'clear' },
      { operation: 'clear' },
      { operation: 'clear' },
      {
        operation: 'addProperties', properties: { yet: 'another property' },
      },
      { operation: 'clear' },
      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim', 
        },
      },
      {
        operation: 'removeProperties', properties: ['name', 'hello'],
      },

    ];
    const result = transformState(operatedObject, operations);
    const expectedResult =  { foo: 'bar' };

    expect(result).toStrictEqual(expectedResult);
  });
});