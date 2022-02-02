export const makeArmy = (amountOfSoliders) => {

  try {
    if (!Number.isInteger(amountOfSoliders)) {
      throw new TypeError('Wrong input: number have to be an integer');
    }
  } catch (e) {
    return e.name;
  }

  const armyArray = [];
  let notEmptySpacesInArray = 0;

  const showCurrentPosition = (armyPos) => () =>  armyPos;

  while (notEmptySpacesInArray !== amountOfSoliders) {

    armyArray.push(showCurrentPosition(notEmptySpacesInArray));
    notEmptySpacesInArray += 1;
  }

  return armyArray;
};
