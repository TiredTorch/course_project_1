export const moveZeros = (arrayOfData) => {

  const arrayWithZeros = arrayOfData.filter(element => element !== 0);
  const amountOfZeros = arrayOfData.length - arrayWithZeros.length;

  for (let index = 0; index < amountOfZeros; index++) {
    
    arrayWithZeros.push(0);
  }

  return arrayWithZeros;

};
