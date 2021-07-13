import axios from "axios";
import { Url } from "../../website/Url";
import { types } from "../types/types";

export const startInitial = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(Url + "?nat=es");
      let response = await res.data;
      console.log(response);
      dispatch(setPersona(response.results[0]));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setPersona = (object) => {
  return {
    type: types.initial,
    payload: {
      doc: object.id.value.split("-")[0],
      celular:
        object.phone.split("-")[0] +
        object.phone.split("-")[1] +
        object.phone.split("-")[2],
      email: object.email,
      name: object.name.first,
    },
  };
};

export const startSignin = (object) => {
  return {
    type: types.signin,
    payload: object,
  };
};

export const startSignOut = () => {
  return {
    type: types.signout,
  };
};
