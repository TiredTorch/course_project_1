export const getOperands = (expresion) => {
    let tempArray = expresion.split(" ")

    if(tempArray.length != 3) {
        return "Error: wrong input"
    }
    if(['+', '-', '/', '*'].indexOf(tempArray[1]) === -1){
        return "Error: wrong operator"
    }

    return `a: ${tempArray[0]}, b: ${tempArray[2]};`
}
