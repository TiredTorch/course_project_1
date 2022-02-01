export const openOrSenior = (listOfMembersData) => {
  const membershipOfTeachers = [];
  const AGE_OF_SENIOR = 40;
  const EXPIRIENCE_OF_SENIOR = 15;

  for (let index = 0; index < listOfMembersData.length; index++) {
    if (listOfMembersData[index].length !== 2) {
      return 'Input error: wrong form of input';
    }

    if (typeof listOfMembersData[index][0] !== 'number' 
    || typeof listOfMembersData[index][1] !== 'number' ) {
      return 'Input error: wrong type of input';
    }

    if(listOfMembersData[index][0] >= AGE_OF_SENIOR 
      && listOfMembersData[index][1] >= EXPIRIENCE_OF_SENIOR) {
      membershipOfTeachers.push('Senior');
    } else {
      membershipOfTeachers.push('Open');
    }
  }

  return membershipOfTeachers;
};