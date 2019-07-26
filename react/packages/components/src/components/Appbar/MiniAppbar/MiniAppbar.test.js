import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MiniAppBar from "./MiniAppbar";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    title: "test-title",
    drawerOpen: true,
    handleDrawerOpen: jest.fn(),
    usermenu: {},
  };

  const mab = shallow(<MiniAppBar {...props} />);

  return {
    mab,
  };
}

it("renders without crashing", () => {
  const { mab } = setup();
  expect(mab).toMatchSnapshot();
});
