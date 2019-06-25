import { combineReducers } from "redux";

import oauth from "./oauth";
import users from "./users";
import ui from "./ui";

const rootReducer = combineReducers({
  ui,
  oauth,
  users,
});

export default rootReducer;
