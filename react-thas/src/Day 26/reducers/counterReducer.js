const initialCounter = 0;

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case "INC_NUMBER":
      return state + 1;
    case "DEC_NUMBER":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
