export const fearNotLetter = (letterRange) => {
  const arrayOfIndexesOfLetters = letterRange.split('').map(letter => letter.toLowerCase().charCodeAt(0));

  let searchedElement = undefined;

  for (let index = 0; index < arrayOfIndexesOfLetters.length - 1; index++) {
    const element = arrayOfIndexesOfLetters[index];
    const nextElement = arrayOfIndexesOfLetters[index + 1];
    
    if (element > nextElement) {
      throw new TypeError('Input does not preserve alphabetical order');
    }

    if (nextElement - element > 2) {
      throw new TypeError('Skipped more then one letter in order');
    }

    if (nextElement - element === 2 && searchedElement !== undefined) {
      throw new Error('In string was found more than one "letter gap"');
    }

    if (nextElement - element === 2 && searchedElement === undefined) {
      searchedElement = String.fromCharCode(element + 1);
    }
  }

  return searchedElement;
};
