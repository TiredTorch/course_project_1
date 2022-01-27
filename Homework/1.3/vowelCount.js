export const vowelCount = (sentence) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let countOfVovelsInWord = 0;

  sentence.toLowerCase().split('').forEach(element => {
    if (vowels.indexOf(element) !== -1) {
      countOfVovelsInWord++;
    }
  });

  return countOfVovelsInWord;
};
