export const calculateRentalCost = (daysAmount) => {
  if (daysAmount < 0) {
    return 'Error: amount of days cant be negative';
  }

  if (daysAmount > 6) {
    return ((daysAmount * 40) - 50);  
  }

  if (daysAmount > 2) {
    return ((daysAmount * 40) - 20);
  }

  return (daysAmount * 40);
};