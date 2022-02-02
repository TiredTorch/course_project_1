export const transformStateWithClones = (state, transforms) => {

  const cloneOfState = {...state};

  const intervalForms = [];

  transforms.forEach(element => {
    switch (element.operation) {
    
      case 'addProperties':
    
        for (const key in element.properties) {
          cloneOfState[key] = element.properties[key];
        }

        intervalForms.push({...cloneOfState});
        break;
    
      case 'clear':
        for (const key in cloneOfState) {
          delete cloneOfState[key];
        }

        intervalForms.push({...cloneOfState});
        break;
    
      case 'removeProperties':
        element.properties.forEach(prop => {
          delete cloneOfState[prop];
        });
    
        intervalForms.push({...cloneOfState});
        break;
        
      default:
        return 'Error: wrong operation';
    }
  });
    
  return intervalForms;
};
