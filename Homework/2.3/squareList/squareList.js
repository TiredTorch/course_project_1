export const squareList = (listOfNumber) =>
  listOfNumber.reduce((acc, value) => {
    if (value >= 0 
      && value % 1 === 0
      && typeof value === 'number') {
      return [...acc, Math.pow(value, 2)];
    }
    
    return [... acc];

  }, []);
