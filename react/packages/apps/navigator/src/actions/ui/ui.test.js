import { TOGGLE_SIDE_DRAWER, OAUTH_SHOW_AUTH_WINDOW, setShowSideDrawer, showAuthWindow } from "./ui";

describe("ui actions", () => {
  it("should create an action to show the auth window", () => {
    const showOAuthWindow = true;
    const expectedAction = {
      type: OAUTH_SHOW_AUTH_WINDOW,
      showOAuthWindow,
    };
    expect(showAuthWindow(showOAuthWindow)).toEqual(expectedAction);
  });

  it("should create an action to set side drawer open status", () => {
    const sideDrawerOpen = true;
    const expectedAction = {
      type: TOGGLE_SIDE_DRAWER,
      sideDrawerOpen,
    };
    expect(setShowSideDrawer(sideDrawerOpen)).toEqual(expectedAction);
  });
});
