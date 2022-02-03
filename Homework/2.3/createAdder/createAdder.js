export const createAdder = (startValue) => {
  
  if (typeof startValue !== 'number' 
    && typeof startValue !== 'undefined') {
    throw new TypeError('You cannot make a start with letter');
  }

  let sum = startValue ?? 0;

  return (...args) => sum += args.reduce((acc, value) => acc + value, 0);

};
          
