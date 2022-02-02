import { transformStateWithClones } from './transformStateWithClones';


describe('Describe createPrevArgSaver', () => {

  test('Should return an array with all stages, that have been done to input object', () => {
    const operatedObject = {
      foo: 'bar', bar: 'foo',
    };
    const operations = [
      {
        operation: 'addProperties', properties: {
          name: 'Jim', hello: 'world',
        },
      }, 
      {
        operation: 'removeProperties', properties: ['bar', 'hello'],
      },
      {
        operation: 'addProperties', properties: {another: 'one'},
      },
    ];
    
    const result = transformStateWithClones(operatedObject, operations);
    const expectedResult = [
      {
        foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world',
      },
      {
        foo: 'bar', name: 'Jim',
      },
      {
        foo: 'bar', name: 'Jim', another: 'one',
      },
    ];
  

    expect(result).toStrictEqual(expectedResult);

    expect(operatedObject).toStrictEqual({
      foo: 'bar', bar: 'foo',
    });
  });

  test('Should return an array with all stages, that have been done to input object', () => {
    const operatedObject =  {
      foo: 'bar', bar: 'foo',
    };
    const operations =  [
      {
        operation: 'addProperties', properties: {yet: 'another property'},
      }, 
      {operation: 'clear'},
      {operation: 'clear'},
      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim',
        },
      },
    ];
      
    
    const result = transformStateWithClones(operatedObject, operations);
    const expectedResult =  [
      {
        foo: 'bar', bar: 'foo', yet: 'another property',
      },
      {},
      {},
      {
        foo: 'bar', name: 'Jim',
      },
    ];
  

    expect(result).toStrictEqual(expectedResult);

    expect(operatedObject).toStrictEqual({
      foo: 'bar', bar: 'foo',
    });
  });

  test('Should return an array with all stages, that have been done to input object', () => {
    const operatedObject = {};
    const operations = [
      {
        operation: 'addProperties', properties: { name: 'Jim' },
      }, 
    ];
    const result = transformStateWithClones(operatedObject, operations);
    const expectedResult =  [
      {name: 'Jim'},
    ];

    expect(result).toStrictEqual(expectedResult);
    expect(operatedObject).toStrictEqual({});
  });

  
});