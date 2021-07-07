import { combineReducers } from "redux";

import oauthadmin from "./oauthadmin";

const tmpReducer = combineReducers({
  oauthadmin,
});

const rootReducer = (state, action) => {
  // here you could manipulate the state directly
  return tmpReducer(state, action);
};

export default rootReducer;
export { oauthadmin };
