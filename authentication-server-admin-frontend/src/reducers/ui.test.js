import ui from "./ui";
import { SHOW_AUTH_WINDOW } from "../constants";

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
        type: SHOW_AUTH_WINDOW,
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
          type: SHOW_AUTH_WINDOW,
          showOAuthWindow: true,
        }
      )
    ).toEqual({
      sideDrawerOpen: true,
      showOAuthWindow: true,
    });
  });
});
