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

    expect(oAuthHandler).not.toBe(null);
  });
});
