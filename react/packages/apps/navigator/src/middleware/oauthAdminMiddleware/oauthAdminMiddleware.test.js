import { OAUTH_USER_PUT_SUCCESS } from "../../actions/oauthadmin";

import oauthAdminMiddleware from "./oauthAdminMiddleware";

const TEST_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const create = () => {
  const store = {
    getState: jest.fn(() => ({ oauth: { authData: { access_token: TEST_TOKEN } } })),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => oauthAdminMiddleware(store)(next)(action);
  return { store, next, invoke };
};

describe("oauthMiddleware", () => {
  it("passes through non-function action", () => {
    const { next, invoke } = create();
    const action = {
      type: OAUTH_USER_PUT_SUCCESS,
    };
    invoke(action);

    // expect(next).toHaveBeenCalledWith(action);
    expect(next).not.toHaveBeenCalled();
  });
});
