export const vowelCountWithRegex = (sentence) => {

  const arrayOfMatches = sentence.match(/a|e|i|o|u/gi);

  return arrayOfMatches ? arrayOfMatches.length : 0;

} ;