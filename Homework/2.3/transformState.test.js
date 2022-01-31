import { transformState } from './transformState';

describe('Describe transformState', () => {
  test('Should work with a long list of operations', () => {
    expect(transformState({
      foo: 'bar', name: 'Jim', another: 'one',
    },
    [
      {
        operation: 'addProperties', properties: {yet: 'another property'},
      }, 
      {operation: 'clear'},
      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim',
        },
      },
    ],
    ))
      .toStrictEqual({
        foo: 'bar', name: 'Jim',
      });
  });

  test('Should work with a long list of operations', () => {
    expect(transformState({},
      [
        {
          operation: 'addProperties', properties: { name: 'Jim' },
        },
      ],
        
    ))
      .toStrictEqual({name: 'Jim'});
  });

  test('Should work with a long list of operations', () => {
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
    expect(transformState({
      foo: 'bar', name: 'Jim', another: 'one',
    },
    [
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

    ],
    ))
      .toStrictEqual({ foo: 'bar' });
  });
});