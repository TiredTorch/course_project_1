export const calculateRentalCost = (daysAmount) => {
  
  if (daysAmount < 0) {
    return 'Error: amount of days cant be negative';
  }

  const BASIC_PRICE = 40;
  const FIRST_TYPE_OF_SALE = 20;
  const SECOND_TYPE_OF_SALE = 50;


  if (daysAmount > 6) {
    return ((daysAmount * BASIC_PRICE) - SECOND_TYPE_OF_SALE);  
  }

  if (daysAmount > 2) {
    return ((daysAmount * BASIC_PRICE) - FIRST_TYPE_OF_SALE);
  }

  return (daysAmount * BASIC_PRICE);
};