export const basicOp = (operation, a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return 0
    }
    const intA = parseInt(a)
    const intB = parseInt(b)
    switch (operation) {
        case "+":
            return intA + intB
    
        case "-":
            return intA - intB
    
        case "*":
            return intA * intB
    
        case "/":
            return intA / intB
    
        default:
            return 0
    }
}
