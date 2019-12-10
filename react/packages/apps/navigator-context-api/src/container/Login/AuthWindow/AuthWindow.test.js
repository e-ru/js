import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { AuthWindowComponent } from "./AuthWindow";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    showOAuthWindow: true,
    authorizationUrl: "http://test.eu",
    setAuthState: jest.fn(),
    showAuthWindowHandler: jest.fn(),
    getToken: jest.fn(),
  };

  const authWin = shallow(<AuthWindowComponent {...props} />);

  return {
    authWin,
  };
}

it("renders without crashing", () => {
  const { authWin } = setup();
  expect(authWin).toMatchSnapshot();
});
