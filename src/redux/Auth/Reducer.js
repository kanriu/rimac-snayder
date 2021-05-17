const AuthStatus = localStorage.getItem("AuthStatus") || false;
const User = JSON.parse(localStorage.getItem("User")) || "";

const initialState = {
  AuthStatus: AuthStatus,
  User: User,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      localStorage.setItem("AuthStatus", true);
      localStorage.setItem("User", JSON.stringify(action.payload));
      return {
        ...state,
        AuthStatus: true,
        User: action.payload,
      };
    case "SIGNOUT":
      localStorage.removeItem("AuthStatus");
      return {
        ...state,
        AuthStatus: false,
      };
    default:
      return state;
  }
};
