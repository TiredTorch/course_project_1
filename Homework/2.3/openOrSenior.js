export const openOrSenior = (listOfMembersData) => {
  const membershipOfTeachers = [];

  for (let index = 0; index < listOfMembersData.length; index++) {
    if (listOfMembersData[index].length !== 2) {
      return 'Input error: wrong form of input';
    }

    if (typeof listOfMembersData[index][0] !== 'number' || typeof listOfMembersData[index][1] !== 'number' ) {
      return 'Input error: wrong type of input';
    }

    if(listOfMembersData[index][0] >= 40 && listOfMembersData[index][1] >= 15) {
      membershipOfTeachers.push('Senior');
    } else {
      membershipOfTeachers.push('Open');
    }
  }

  return membershipOfTeachers;
};