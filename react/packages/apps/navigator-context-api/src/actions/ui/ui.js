export const TOGGLE_SIDE_DRAWER = "TOGGLE_SIDE_DRAWER";
export const OAUTH_SHOW_AUTH_WINDOW = "OAUTH_SHOW_AUTH_WINDOW";

export const setShowSideDrawer = sideDrawerOpen => ({
  type: TOGGLE_SIDE_DRAWER,
  sideDrawerOpen,
});

export const showAuthWindow = showOAuthWindow => ({
  type: OAUTH_SHOW_AUTH_WINDOW,
  showOAuthWindow,
});
