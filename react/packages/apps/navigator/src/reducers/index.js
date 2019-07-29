import { combineReducers } from "redux";

import ui from "./ui";
import oauth from "./oauth";
import oauthadmin from "./oauthadmin";

const tmpReducer = combineReducers({
  ui,
  oauth,
  oauthadmin,
});

const rootReducer = (state, action) => {
  // here you could manipulate the state directly
  return tmpReducer(state, action);
};

export default rootReducer;
