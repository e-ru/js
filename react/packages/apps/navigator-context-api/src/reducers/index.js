import * as ui from "./ui";
import * as oauth from "./oauth";

const createReducer = handlers => (state, action) => {
  if (!Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return state;
  }

  return handlers[action.type](state, action);
};

export const initialState = {
  ...ui.initialState,
  ...oauth.initialState,
};

export default createReducer({
  ...ui,
});
