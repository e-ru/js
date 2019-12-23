import { OAUTH_SET_DATA, setOAuthData } from "./oauth";

describe("oauth actions", () => {
  it("should create an action to set oauth data", () => {
    const authData = {};
    const username = "username_foo";
    const clientId = "clientId_foo";
    const expectedAction = {
      type: OAUTH_SET_DATA,
      authData,
      username,
      clientId,
    };
    expect(setOAuthData(authData, username, clientId)).toEqual(expectedAction);
  });
});
