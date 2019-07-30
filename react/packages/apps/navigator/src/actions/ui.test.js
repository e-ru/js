import { OAUTH_SHOW_AUTH_WINDOW, showAuthWindow } from "./ui";

describe("actions", () => {
  it("should create an action to show the auth window", () => {
    const showOAuthWindow = true;
    const expectedAction = {
      type: OAUTH_SHOW_AUTH_WINDOW,
      showOAuthWindow,
    };
    expect(showAuthWindow(showOAuthWindow)).toEqual(expectedAction);
  });
});
