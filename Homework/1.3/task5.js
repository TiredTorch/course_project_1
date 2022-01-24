export const getTime = (timeString) => {
    let tempArray = timeString.split(" ")

    let tempArrayOfData = [];

    tempArray.forEach(element => {
        if (element.indexOf(":") !== -1) {
            tempArrayOfData.push(element)
        }
    });

    for (let index = 0; index < tempArrayOfData.length; index++) {

        let tempNumbersOfData = tempArrayOfData[index].split(":")

        if (parseInt(tempNumbersOfData[0]) < 0 || parseInt(tempNumbersOfData[0]) >= 24) {
            continue
        }
        if (parseInt(tempNumbersOfData[1]) < 0 || parseInt(tempNumbersOfData[1]) >= 60) {
            continue
        }
        return `${tempNumbersOfData[0].slice(0, 2)}:${tempNumbersOfData[1].slice(0, 2)}`
        
    }
    return "Error: no date in a string"

}
