export const getTime = (timeString) => {
  const tempArray = timeString.split(' ');

  const tempArrayOfData = [];

  tempArray.forEach(element => {
    if (element.indexOf(':') !== -1) {
      tempArrayOfData.push(element);
    }
  });

  for (let index = 0; index < tempArrayOfData.length; index++) {

    const tempNumbersOfData = tempArrayOfData[index].split(':');

    if (parseInt(tempNumbersOfData[0]) < 0 || parseInt(tempNumbersOfData[0]) >= 24) {
      continue;
    }

    if (parseInt(tempNumbersOfData[1]) < 0 || parseInt(tempNumbersOfData[1]) >= 60) {
      continue;
    }

    return `${tempNumbersOfData[0].slice(0, 2)}:${tempNumbersOfData[1].slice(0, 2)}`;
        
  }

  return ' ';

};
