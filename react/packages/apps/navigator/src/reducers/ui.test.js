import ui from "./ui";
import { OAUTH_SHOW_AUTH_WINDOW } from "../constants/actionTypes";

describe("ui reducer", () => {
  it("should return the initial state", () => {
    expect(ui(undefined, {})).toEqual({
      sideDrawerOpen: true,
      showOAuthWindow: false,
    });
  });

  it("should handle SHOW_AUTH_WINDOW", () => {
    expect(
      ui([], {
        type: OAUTH_SHOW_AUTH_WINDOW,
        showOAuthWindow: true,
      })
    ).toEqual({
      showOAuthWindow: true,
    });

    expect(
      ui(
        {
          sideDrawerOpen: true,
          showOAuthWindow: false,
        },
        {
          type: OAUTH_SHOW_AUTH_WINDOW,
          showOAuthWindow: true,
        }
      )
    ).toEqual({
      sideDrawerOpen: true,
      showOAuthWindow: true,
    });
  });
});
