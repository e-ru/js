import { TOGGLE_SIDE_DRAWER, OAUTH_SHOW_AUTH_WINDOW } from "../constants/actionTypes";

export const initialState = {
  sideDrawerOpen: true,
  showOAuthWindow: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_DRAWER:
      return {
        ...state,
        sideDrawerOpen: action.sideDrawerOpen,
      };
    case OAUTH_SHOW_AUTH_WINDOW:
      return {
        ...state,
        showOAuthWindow: action.showOAuthWindow,
      };
    default:
      return state;
  }
};
