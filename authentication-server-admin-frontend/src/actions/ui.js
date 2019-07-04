import { TOGGLE_SIDE_DRAWER, SHOW_AUTH_WINDOW } from "../constants";

export const setShowSideDrawer = sideDrawerOpen => ({
  type: TOGGLE_SIDE_DRAWER,
  sideDrawerOpen,
});

export const showAuthWindow = showOAuthWindow => ({
  type: SHOW_AUTH_WINDOW,
  showOAuthWindow,
});
