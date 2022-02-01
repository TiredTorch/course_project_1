export const reverseWords = (sentence) => {
  return sentence.split(' ')
    .map(element => element.split('').reverse().join('')) //splited string to use reverse method
    .join(' ');
};  