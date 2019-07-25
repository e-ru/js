import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { LoginButtonComponent } from "./LoginButton";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    showAuthWindowHandler: jest.fn(),
  };

  const lgnBtn = shallow(<LoginButtonComponent {...props} />);

  return {
    lgnBtn,
  };
}

it("renders without crashing", () => {
  const { lgnBtn } = setup();
  expect(lgnBtn).toMatchSnapshot();
});
