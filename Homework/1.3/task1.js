export const basicOp = (operation, firstElement, secondElement) => {
    if (isNaN(firstElement) || isNaN(secondElement)) {
        return 0
    }
    const intFirstElement = parseInt(firstElement)
    const intSecondElement = parseInt(secondElement)
    switch (operation) {
        case "+":
            return intFirstElement + intSecondElement
    
        case "-":
            return intFirstElement - intSecondElement
    
        case "*":
            return intFirstElement * intSecondElement
    
        case "/":
            return intFirstElement / intSecondElement
    
        default:
            return 0
    }
}
