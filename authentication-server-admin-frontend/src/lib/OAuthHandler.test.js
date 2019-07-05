import OAuthHandler from "./OAuthHandler";

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  return store;
};

describe("OAuthHandler", () => {
  it("check object generation", () => {
    const store = create();
    const oAuthHandler = new OAuthHandler(store);

    expect(oAuthHandler.userUpdated).toBe(false);
  });

  it("check refreshAfterUpdateState", () => {
    const store = create();
    const oAuthHandler = new OAuthHandler(store);

    oAuthHandler.userUpdated = true;
    oAuthHandler.refreshAfterUpdateState();

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
