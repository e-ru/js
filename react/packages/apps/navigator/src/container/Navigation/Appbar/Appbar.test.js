import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { AppbarComponent } from "./Appbar";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    title: "appbar title",
    drawerOpen: false,
    handleDrawerOpen: jest.fn(),
  };

  const wrapper = shallow(<AppbarComponent {...props} />);

  return {
    wrapper,
  };
}

it("renders without crashing", () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
