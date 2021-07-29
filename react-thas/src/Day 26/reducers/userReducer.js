const initialUser = {
  username: "",
  email: "",
};

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case "CHG_USERNAME":
      return { ...state, username: action.payload };
    case "CHG_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default userReducer;
