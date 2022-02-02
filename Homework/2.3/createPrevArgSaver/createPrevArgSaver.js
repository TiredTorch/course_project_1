export const createPrevArgSaver = () => {
  let prevState;
  let currentState;

  return (state) => {
    prevState = currentState;
    currentState = state;

    return prevState;

  };
};
