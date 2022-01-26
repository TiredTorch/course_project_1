export const getTimeEx = (timeString) => {
  const regPattern = /(([0-1]\d)|(2[0-3])):([0-5]\d)/;

  return (timeString.match(regPattern) !== null ? timeString.match(regPattern)[0] : ' ');
};
