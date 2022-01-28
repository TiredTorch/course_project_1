export const countOccurrencesWithRegex = (sentence, char) => {
  if(char.length !== 1 ){
    return 0;
  }
  
  const regPattern = new RegExp(`${char}`, 'gi');
  const arrayOfMatches = sentence.match(regPattern);

  return arrayOfMatches ? arrayOfMatches.length : 0;
};
