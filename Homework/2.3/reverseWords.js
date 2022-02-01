export const reverseWords = (sentence) => {
  sentence.split(' ')
    .map(element => element.split('').reverse().join('')) //splited string to use reverse method
    .join(' ');
};  