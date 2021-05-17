import { combineReducers } from "redux";
import Auth from "./Auth/Reducer";
import Global from "./Global/Reducer";

const reducers = combineReducers({
  Auth,
  Global,
});

export default reducers;
