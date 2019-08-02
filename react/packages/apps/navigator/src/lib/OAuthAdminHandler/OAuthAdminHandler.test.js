import OAuthAdminHandler from "./OAuthAdminHandler";

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  return store;
};

describe("OAuthAdminHandler", () => {
  it("check object generation", () => {
    const store = create();
    const oAuthAdminHandler = new OAuthAdminHandler(store);

    expect(oAuthAdminHandler).not.toBe(null);
  });
});
