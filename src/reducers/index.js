import { combineReducers } from "redux";
import CarsReducer from "./cars";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  CarsReducer,
  form: formReducer,
});
