import { TOGGLE_SIDE_DRAWER, OAUTH_SHOW_AUTH_WINDOW } from "../constants/actionTypes";

export const setShowSideDrawer = sideDrawerOpen => ({
  type: TOGGLE_SIDE_DRAWER,
  sideDrawerOpen,
});

export const showAuthWindow = showOAuthWindow => ({
  type: OAUTH_SHOW_AUTH_WINDOW,
  showOAuthWindow,
});
