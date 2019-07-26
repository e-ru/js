import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MiniDrawer from "./MiniDrawer";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    sideDrawerOpen: true,
    sideDrawerOpenHandler: jest.fn(),
    drawerContent: [],
  };

  const mab = shallow(<MiniDrawer {...props} />);

  return {
    mab,
  };
}

it("renders without crashing", () => {
  const { mab } = setup();
  expect(mab).toMatchSnapshot();
});
