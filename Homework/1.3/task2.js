export const stringMerge = (firstWord, secondWord, breakpoint) => {
  if (breakpoint.length !== 1 || typeof breakpoint !== 'string') {
    return 'Error: input value not a symbol';
  }

  if(!firstWord.includes(breakpoint) || !secondWord.includes(breakpoint)) {
    return `Error: some of strings doesnt contains ${breakpoint}`;
  }

  const firstPartOfNewWord = firstWord.slice(0, firstWord.indexOf(breakpoint));
  const secondPartOfNewWord = secondWord.slice(secondWord.indexOf(breakpoint));

  return firstPartOfNewWord + secondPartOfNewWord;
};
