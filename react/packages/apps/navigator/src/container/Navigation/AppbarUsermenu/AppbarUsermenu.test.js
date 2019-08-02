import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { AppbarUsermenuComponent } from "./AppbarUsermenu";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    revokeRefreshTokenHandler: jest.fn(),
  };

  const wrapper = shallow(<AppbarUsermenuComponent {...props} />);

  return {
    wrapper,
  };
}

it("renders without crashing", () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
