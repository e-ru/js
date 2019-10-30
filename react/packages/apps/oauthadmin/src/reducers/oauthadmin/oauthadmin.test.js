import oauthadmin, { initialState } from "./oauthadmin";
import { OAUTH_USERS_GET_REQUEST, OAUTH_USER_PUT_REQUEST, OAUTH_USERS_GET_SUCCESS } from "../../actions/oauthadmin";

describe("oauthadmin reducer", () => {
  it("should return the initial state", () => {
    expect(oauthadmin(undefined, {})).toEqual(initialState);
  });

  it("should handle OAUTH_USERS_GET_REQUEST", () => {
    expect(
      oauthadmin([], {
        type: OAUTH_USERS_GET_REQUEST,
        getOAuthUsersInProgress: true,
      })
    ).toEqual({
      getOAuthUsersInProgress: true,
    });

    expect(
      oauthadmin(initialState, {
        type: OAUTH_USERS_GET_REQUEST,
        getOAuthUsersInProgress: true,
      })
    ).toEqual({
      getOAuthUsersInProgress: true,
      oAuthUsers: [],
    });
  });

  it("should handle OAUTH_USER_PUT_REQUEST", () => {
    expect(
      oauthadmin([], {
        type: OAUTH_USER_PUT_REQUEST,
        getOAuthUsersInProgress: true,
      })
    ).toEqual({
      getOAuthUsersInProgress: true,
    });

    expect(
      oauthadmin(initialState, {
        type: OAUTH_USER_PUT_REQUEST,
        getOAuthUsersInProgress: true,
      })
    ).toEqual({
      getOAuthUsersInProgress: true,
      oAuthUsers: [],
    });
  });

  it("should handle OAUTH_USERS_GET_SUCCESS", () => {
    expect(
      oauthadmin([], {
        type: OAUTH_USERS_GET_SUCCESS,
        payload: [{}],
      })
    ).toEqual({
      getOAuthUsersInProgress: false,
      oAuthUsers: [{}],
    });

    expect(
      oauthadmin(initialState, {
        type: OAUTH_USERS_GET_SUCCESS,
        payload: [{}],
      })
    ).toEqual({
      getOAuthUsersInProgress: false,
      oAuthUsers: [{}],
    });
  });
});
