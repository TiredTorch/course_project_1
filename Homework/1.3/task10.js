export const alphabetPosition = (sentence) => {
  let positionInAlphabetOfSentenceLetters = '';

  for (let index = 0; index < sentence.length; index++) {

    if (sentence.charCodeAt(index) > 64 && sentence.charCodeAt(index) < 91) {

      positionInAlphabetOfSentenceLetters += `${(sentence.charCodeAt(index)) - 64} `;
    }

    if (sentence.charCodeAt(index) > 96 && sentence.charCodeAt(index) < 123) {

      positionInAlphabetOfSentenceLetters += `${(sentence.charCodeAt(index)) - 96} `;
    }
        

  }

  return positionInAlphabetOfSentenceLetters.slice(0, -1);
};

