export const swapCase = (sentence) => {
    const newSentence = sentence.split('')
    .map((char) => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');

    return newSentence
}