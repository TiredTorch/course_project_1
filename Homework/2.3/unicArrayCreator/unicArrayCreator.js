export const unicArrayCreator = (userArray) => [... new Set(userArray)];

// eslint-disable-next-line no-console
console.log(unicArrayCreator([1, 2, 3, 3, 6]));