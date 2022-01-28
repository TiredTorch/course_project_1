export const countOccurrences = (sentence, char) => {
  if(char.length !== 1 ){
    return 0;
  }

  const splitedSentence = sentence.toLowerCase().split('');
  let countOfEnterance = 0;

  const newChar = char.toLowerCase();

  splitedSentence.forEach(element => {
    if(element === newChar ){
      countOfEnterance++;
    }
  });

  return countOfEnterance;
};
