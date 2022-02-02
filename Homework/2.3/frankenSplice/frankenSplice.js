export const frankenSplice = (firstArray, secondArray, positionOfInsertionFirstArray) => {

  try {
    if (positionOfInsertionFirstArray > secondArray.length) {
      throw new RangeError('Index of insertion more then second array length');
    }

    if (typeof positionOfInsertionFirstArray !== 'number') {
      throw new TypeError('Position of insertion have to be a number');
    }
    
  } catch (e) {
    return e.message;
  }

  secondArray.splice(positionOfInsertionFirstArray, 0, ...firstArray);

  return secondArray;

};
