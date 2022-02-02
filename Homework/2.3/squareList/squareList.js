export const squareList = (listOfNumber) =>
  listOfNumber
    .filter(
      arg =>  arg >= 0 
      && arg % 1 === 0
      && typeof arg === 'number')
    .map( (num) => num * num);
