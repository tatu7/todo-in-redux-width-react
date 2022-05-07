import { combineReducers } from "redux";
import addReducer from "./addReducer";
import deleteReducer from "./deleteReducer";

const allReducers = combineReducers({
  addReducer: addReducer,
  deleteReducer: deleteReducer,
});
export default allReducers;
