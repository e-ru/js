import { showAuthWindow } from "./ui";
import { SHOW_AUTH_WINDOW } from "../constants";

describe("actions", () => {
  it("should create an action to show the auth window", () => {
    const showOAuthWindow = true;
    const expectedAction = {
      type: SHOW_AUTH_WINDOW,
      showOAuthWindow,
    };
    expect(showAuthWindow(showOAuthWindow)).toEqual(expectedAction);
  });
});
