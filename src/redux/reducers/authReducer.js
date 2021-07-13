import { types } from "../types/types";
const authStatus = localStorage.getItem("AuthStatus") || false;
const user = JSON.parse(localStorage.getItem("User")) || null;

const initialState = {
  authStatus: authStatus,
  user: user,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.initial:
      return {
        ...state,
        user: action.payload,
      };
    case types.signin:
      localStorage.setItem("AuthStatus", true);
      localStorage.setItem("User", JSON.stringify(action.payload));
      return {
        ...state,
        authStatus: true,
        user: action.payload,
      };
    case types.signout:
      localStorage.removeItem("AuthStatus");
      localStorage.removeItem("User");
      return {
        ...state,
        authStatus: false,
        user: null,
      };
    default:
      return state;
  }
};
