export const createPhoneNumber = (arrayOfNumbers) => {
    if (arrayOfNumbers.length !== 10) {
        return "Error: wrong amount of numbers in array"
    }

    let arrayOfTrulyNumber = arrayOfNumbers.map(element => parseInt(element))

    if (arrayOfTrulyNumber.includes(NaN)) {
        return "Error: wrong input (not int in array)"
    }
    console.log(arrayOfTrulyNumber)

    arrayOfTrulyNumber = arrayOfTrulyNumber.join('')

    return `(${arrayOfTrulyNumber.slice(0, 3)}) ${arrayOfTrulyNumber.slice(3,6)}-${arrayOfTrulyNumber.slice(6, 10)}`
}
