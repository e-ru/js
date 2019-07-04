import { TOGGLE_SIDE_DRAWER, SHOW_AUTH_WINDOW } from "../constants";

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
    case SHOW_AUTH_WINDOW:
      return {
        ...state,
        showOAuthWindow: action.showOAuthWindow,
      };
    default:
      return state;
  }
};
