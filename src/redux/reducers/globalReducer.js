import { types } from "../types/types";

const stepGlobal = localStorage.getItem("StepGlobal") || 0;
const auto = JSON.parse(localStorage.getItem("Auto")) || null;

const initialState = {
  stepGlobal: stepGlobal,
  finalStatus: false,
  auto: auto,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.sidebar:
      localStorage.setItem("StepGlobal", action.payload);
      return {
        ...state,
        stepGlobal: action.payload,
      };
    case types.final:
      localStorage.removeItem("AuthStatus");
      localStorage.removeItem("User");
      localStorage.removeItem("Auto");
      localStorage.removeItem("stepGlobal");
      return {
        ...state,
        finalStatus: true,
      };
    case types.auto:
      localStorage.setItem("Auto", JSON.stringify(action.payload));
      return {
        ...state,
        auto: action.payload,
      };
    default:
      return state;
  }
};
