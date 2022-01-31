export const isPrime = (number) => {
  if (number <= 1 || typeof number !== 'number') {
    return false;
  }

  for(let i = 2; i < number; i++) {
    if(number % i === 0) {
      return false;
    }
  }

  return true;
};