import { USERS_GET_SUCCESS } from "../constants";

import oAuthMiddleware from "./oauthMiddleware";

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => oAuthMiddleware(store)(next)(action);
  return { store, next, invoke };
};

describe("oauthMiddleware", () => {
  it("passes through non-function action", () => {
    const { next, invoke } = create();
    const action = { type: USERS_GET_SUCCESS };
    invoke(action);

    expect(next).toHaveBeenCalledWith(action);
  });
});
