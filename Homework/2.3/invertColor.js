/* eslint-disable no-param-reassign */
export const invertColor = (hex) => {
  if (hex.length !== 7 || hex[0] !== '#') {
    return 'Error: input # with 6 digit hex color';
  }

  const symbols = '0123456789abcdef';

  hex = hex.toLowerCase();

  for (let index = 1; index < hex.length; index++) {
    if (symbols.indexOf(hex[index]) === -1) {
      return 'Error: input is not HEX digits';
    }
    
  }

  return '#' + hex.split('')
    .map(element => symbols[symbols.length - symbols.indexOf(element) - 1])
    .join('');

};