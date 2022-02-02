export const invertObject = (userObject) => {

  if (typeof userObject !== 'object') {
    throw new TypeError('You should enter object');
  }

  const swappedObject = {};

  for (const key in userObject) {

    swappedObject[userObject[key]] = key;

  }

  if (Object.keys(userObject).length !== Object.keys(swappedObject).length) {
    return null;
  }

  return swappedObject;
};

