export const stringMerge = (firstWord, secondWord, breakpoint) => {
    if (breakpoint.length != 1) {
        return "Error: input value not a symbol"
    }
    if(!firstWord.includes(breakpoint) || !secondWord.includes(breakpoint)) {
        //Nujno li delat exeption
        return `Error: some of strings doesnt contains ${breakpoint}`
    }
    let firstPartOfNewWord = firstWord.slice(0, firstWord.indexOf(breakpoint))
    let secondPartOfNewWord = secondWord.slice(secondWord.indexOf(breakpoint))

    return firstPartOfNewWord + secondPartOfNewWord;
}
