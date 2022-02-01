export const transformStateWithClones = (state, transforms) => {

  const intervalForms = [];

  transforms.forEach(element => {
    switch (element.operation) {
    
      case 'addProperties':
    
        for (const key in element.properties) {
          state[key] = element.properties[key];
        }

        intervalForms.push({...state});
        break;
    
      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        intervalForms.push({...state});
        break;
    
      case 'removeProperties':
        element.properties.forEach(prop => {
          delete state[prop];
        });
    
        intervalForms.push({...state});
        break;
        
      default:
        return 'Error: wrong operation';
    }
  });
    
  return intervalForms;
};

// eslint-disable-next-line no-console
console.log(transformStateWithClones(
  {
    foo: 'bar', bar: 'foo',
  },
  [
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
  ],
    
));