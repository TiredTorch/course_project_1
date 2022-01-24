export const basicOp = (operation, a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return 0
    }
    let intA = parseInt(a)
    let intB = parseInt(b)
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
