import { combineReducers } from "redux";

import oauth from "./oauth";

const rootReducer = combineReducers({
  oauth,
});

export default rootReducer;
