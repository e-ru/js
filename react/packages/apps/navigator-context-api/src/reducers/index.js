import * as ui from "./ui";
import * as oauth from "./oauth";

import applyMiddlewares from "../middleware";

const createReducer = handlers => (state, action) => {
  if (!Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return state;
  }

  return applyMiddlewares({
    state,
    action,
    handler: handlers[action.type],
  });
};

export const initialState = {
  ...ui.initialState,
  ...oauth.initialState,
};
console.log("ui: ", ui);
export default createReducer({
  ...ui.reducer,
});
