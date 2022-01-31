export const transformState = (state, transforms) => {

  transforms.forEach(element => {
    switch (element.operation) {

      case 'addProperties':

        for (const key in element.properties) {
          state[key] = element.properties[key];
        }

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        element.properties.forEach(prop => {
          delete state[prop];
        });

        break;
      default:
        return 'Error: wrong operation';
    }
  });

  return state;
};
