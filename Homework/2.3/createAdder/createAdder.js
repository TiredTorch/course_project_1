export const createAdder = (startValue) => {
  
  if (typeof startValue !== 'number' 
    && typeof startValue !== 'undefined') {
    throw new TypeError('You cannot make a start with letter');
  }

  let sum = startValue ?? 0;

  return (...args) => {
    for (const arg of args) {
      sum += arg;
    }

    return sum;
  };
};
          
