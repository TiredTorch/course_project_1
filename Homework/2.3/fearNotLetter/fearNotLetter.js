export const fearNotLetter = (letterRange) => {
  const arrayOfIndexesOfLetters = letterRange.split('').map(letter => letter.charCodeAt(0));

  for (let index = 0; index < arrayOfIndexesOfLetters.length - 1; index++) {
    const element = arrayOfIndexesOfLetters[index];
    const nextElement = arrayOfIndexesOfLetters[index + 1];
    
    try {
      if (element > nextElement) {
        throw new TypeError('Input does not preserve alphabetical order');
      }

      if (nextElement - element > 2) {
        throw new TypeError('Skipped more then one letter in order');
      }

    } catch (e) {
      return e.message;
    }

    if (nextElement - element === 2) {
      return String.fromCharCode(element + 1);
    }
  }

  return undefined;
};
