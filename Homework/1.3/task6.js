export const isPalidrome = (sentence) => {
    const sentenceSymbols = [',', '?', '.', '!', ':', ' ']

    let pureSentense = ''

    sentence.split('').forEach(element => {
        if(sentenceSymbols.indexOf(element) === -1){
            pureSentense += `${element}`
        }
    });

    return pureSentense.toLowerCase() === pureSentense.toLowerCase().split('').reverse().join('');
}