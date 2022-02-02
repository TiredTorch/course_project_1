export const invertObject = (userObject) => {

  try {
    if (typeof userObject !== 'object') {
      throw new TypeError('You should enter object');
    }
  } catch (e) {
    return e.message;
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

