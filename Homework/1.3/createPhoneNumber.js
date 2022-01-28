export const createPhoneNumber = (arrayOfNumbers) => {
  if (arrayOfNumbers.length !== 10) {
    return 'Error: wrong amount of numbers in array';
  }

  arrayOfNumbers.map(element => parseInt(element));

  if (arrayOfNumbers.includes(NaN)) {
    return 'Error: wrong input (not int in array)';
  }

  const joinedArrayOfTrulyNumber = arrayOfNumbers.join('');

  return `(${joinedArrayOfTrulyNumber.slice(0, 3)}) ${joinedArrayOfTrulyNumber.slice(3,6)}-${joinedArrayOfTrulyNumber.slice(6, 10)}`;
};
