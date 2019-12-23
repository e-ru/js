import { reducer, initialState } from "./ui";
import { OAUTH_SHOW_AUTH_WINDOW, TOGGLE_SIDE_DRAWER } from "../../actions/ui";

describe("ui reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SHOW_AUTH_WINDOW", () => {
    expect(
      reducer([], {
        type: OAUTH_SHOW_AUTH_WINDOW,
        showOAuthWindow: true,
      })
    ).toEqual({
      showOAuthWindow: true,
    });

    expect(
      reducer(initialState, {
        type: OAUTH_SHOW_AUTH_WINDOW,
        showOAuthWindow: true,
      })
    ).toEqual({
      sideDrawerOpen: true,
      showOAuthWindow: true,
    });
  });

  it("should handle TOGGLE_SIDE_DRAWER", () => {
    expect(
      reducer([], {
        type: TOGGLE_SIDE_DRAWER,
        sideDrawerOpen: false,
      })
    ).toEqual({
      sideDrawerOpen: false,
    });

    expect(
      reducer(initialState, {
        type: TOGGLE_SIDE_DRAWER,
        sideDrawerOpen: false,
      })
    ).toEqual({
      sideDrawerOpen: false,
      showOAuthWindow: false,
    });
  });
});
