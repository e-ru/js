export const toggleSideDrawer = (state, sideDrawerOpen) => ({
  ...state,
  sideDrawerOpen,
});

export const showAuthWindow = (state, showOAuthWindow) => ({
  ...state,
  showOAuthWindow,
});
