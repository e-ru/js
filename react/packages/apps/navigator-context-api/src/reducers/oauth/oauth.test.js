import { reducer, initialState } from "./oauth";
import { OAUTH_SET_DATA } from "../../actions/oauth";

describe("oauth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle OAUTH_SET_DATA", () => {
    expect(
      reducer([], {
        type: OAUTH_SET_DATA,
        authData: {},
        username: "username_foo",
        clientId: "clientId_foo",
      })
    ).toEqual({
      loggedIn: true,
      authData: {},
      username: "username_foo",
      clientId: "clientId_foo",
    });

    expect(
      reducer(initialState, {
        type: OAUTH_SET_DATA,
        authData: {},
        username: "username_foo",
        clientId: "clientId_foo",
      })
    ).toEqual({
      authData: {},
      username: "username_foo",
      clientId: "clientId_foo",
      error: null,
      loggedIn: true,
    });
  });
});
