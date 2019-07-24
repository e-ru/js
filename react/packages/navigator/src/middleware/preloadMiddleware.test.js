import preloadMiddleware from "./preloadMiddleware";

import { OAUTH_SET_DATA } from "../constants";
import { initialState as oauth } from "../reducers/oauth";

const create = () => {
  const store = {
    getState: jest.fn(() => ({ oauth })),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => preloadMiddleware(store)(next)(action);
  return { store, next, invoke };
};

describe("oauthMiddleware", () => {
  it("passes through non-function action", () => {
    const { next, invoke } = create();
    const action = { type: OAUTH_SET_DATA, authData: { access_token: "" } };
    invoke(action);

    expect(next).toHaveBeenCalledWith(action);
  });
});
