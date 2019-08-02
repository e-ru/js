import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { DrawerComponent } from "./Drawer";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    sideDrawerOpen: true,
    sideDrawerOpenHandler: jest.fn(),
  };

  const wrapper = shallow(<DrawerComponent {...props} />);

  return {
    wrapper,
  };
}

it("renders without crashing", () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
