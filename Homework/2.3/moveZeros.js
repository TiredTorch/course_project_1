export const moveZeros = (arrayOfData) => {

  const arrayWithoutZeros = arrayOfData.filter(element => element !== 0);
  const amountOfZeros = arrayOfData.length - arrayWithoutZeros.length;

  const arrayWithZeros = arrayWithoutZeros;

  for (let index = 0; index < amountOfZeros; index++) {
    
    arrayWithZeros.push(0);
  }

  return arrayWithZeros;

};
