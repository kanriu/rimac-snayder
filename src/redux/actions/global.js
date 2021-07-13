import { types } from "../types/types";

export const setSidebar = (step) => {
  return {
    type: types.sidebar,
    payload: step,
  };
};

export const setAutoGlobal = (data) => {
  return {
    type: types.auto,
    payload: data,
  };
};

export const setFinal = () => {
  return {
    type: types.final,
  };
};
