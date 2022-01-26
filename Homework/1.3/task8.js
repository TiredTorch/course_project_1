export const countOccurrences = (sentence, char) => {
  if(char.length !== 1){
    return 0;
  }

  const splitedSentence = sentence.toLowerCase().split('');
  let countOfEnterance = 0;


  splitedSentence.forEach(element => {
    if(element === char.toLowerCase() ){
      countOfEnterance++;
    }
  });

  return countOfEnterance;
};
