import { combineReducers } from "redux";

import oauth from "./oauth";
import users from "./users";
import ui from "./ui";

const tmpReducer = combineReducers({
  ui,
  oauth,
  // users,
});

const rootReducer = (state, action) => {
  // here you could manipulate state directly
  return tmpReducer(state, action);
};

export default rootReducer;
