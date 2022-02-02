export const moveZeros = (arrayOfData) => {

  const resultedArray = arrayOfData.filter(element => element !== 0);
  const amountOfZeros = arrayOfData.length - resultedArray.length;

  for (let index = 0; index < amountOfZeros; index++) {
    
    resultedArray.push(0);
  }

  return resultedArray;

};
