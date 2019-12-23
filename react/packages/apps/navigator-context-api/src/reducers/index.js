import { createReducer } from "@e-ru/store/src";

import * as ui from "./ui";
import * as oauth from "./oauth";

export const initialState = {
  ui: ui.initialState,
  oauth: oauth.initialState,
};

export default createReducer({
  ui: ui.reducer,
  oauth: oauth.reducer,
});
