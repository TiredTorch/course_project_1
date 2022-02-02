export const createAdder = (startValue) => {
  
  try {
    if (typeof startValue !== 'number' 
    && typeof startValue !== 'undefined') {
      throw new TypeError;
    }
  } catch (e) {
    return e.name;
  }

  let sum = startValue ?? 0;

  return (...args) => {
    for (const arg of args) {
      sum += arg;
    }

    return sum;
  };
};
          
