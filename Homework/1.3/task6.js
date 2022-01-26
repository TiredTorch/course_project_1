export const isPalindrome = (sentence) => {

  const pureSentense = sentence.replace(/\W/gm, '').toLowerCase();

  return pureSentense === pureSentense.split('').reverse().join('');
};
