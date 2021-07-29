const incNumber = () => {
  return {
    type: "INC_NUMBER",
  };
};
const decNumber = () => {
  return {
    type: "DEC_NUMBER",
  };
};

const changeUsername = (input) => {
  return {
    type: "CHG_USERNAME",
    payload: input,
  };
};
const changeEmail = (input) => {
  return {
    type: "CHG_EMAIL",
    payload: input,
  };
};

export { incNumber, decNumber, changeEmail, changeUsername };
