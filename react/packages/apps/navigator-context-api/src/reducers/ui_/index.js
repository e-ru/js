import * as types from "../../actions/ui/types";
import * as ui from "./ui";
import state from "./initialState";

export const initialState = {
  ...state,
};

export const reducer = {
  [types.TOGGLE_SIDE_DRAWER]: ui.toggleSideDrawer,
  [types.OAUTH_SHOW_AUTH_WINDOW]: ui.showAuthWindow,
};
