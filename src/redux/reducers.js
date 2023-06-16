import { combineReducers } from "redux";
import { getPostReducer } from "./posts/reducer";
const reducers = combineReducers({
  getPostReducer,
});

export default reducers;
