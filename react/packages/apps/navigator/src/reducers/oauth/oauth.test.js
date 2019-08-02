import oauth, { initialState } from "./oauth";
import { OAUTH_SET_RANDOM_STATE, OAUTH_SET_DATA } from "../../actions/oauth";

describe("oauth reducer", () => {
  it("should return the initial state", () => {
    expect(oauth(undefined, {})).toEqual(initialState);
  });

  it("should handle OAUTH_SET_RANDOM_STATE", () => {
    expect(
      oauth([], {
        type: OAUTH_SET_RANDOM_STATE,
        authState: "foo_state",
      })
    ).toEqual({
      authState: "foo_state",
    });

    expect(
      oauth(initialState, {
        type: OAUTH_SET_RANDOM_STATE,
        authState: "foo_state",
      })
    ).toEqual({
      tokenKey: "",
      authData: {},
      username: null,
      clientId: null,
      error: null,
      authState: "foo_state",
      loggedIn: false,
    });
  });

  it("should handle OAUTH_SET_DATA", () => {
    expect(
      oauth([], {
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
      oauth(initialState, {
        type: OAUTH_SET_DATA,
        authData: {},
        username: "username_foo",
        clientId: "clientId_foo",
      })
    ).toEqual({
      tokenKey: "",
      authData: {},
      username: "username_foo",
      clientId: "clientId_foo",
      error: null,
      authState: "",
      loggedIn: true,
    });
  });
});
