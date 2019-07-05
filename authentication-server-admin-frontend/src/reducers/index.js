import { combineReducers } from "redux";

import oauth from "./oauth";
import ui from "./ui";

const tmpReducer = combineReducers({
  ui,
  oauth,
});

const rootReducer = (state, action) => {
  // here you could manipulate the state directly
  return tmpReducer(state, action);
};

export default rootReducer;
