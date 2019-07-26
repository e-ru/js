import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MobileDrawer from "./MobileDrawer";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    sideDrawerOpen: true,
    sideDrawerOpenHandler: jest.fn(),
  };

  const mab = shallow(<MobileDrawer {...props}>{[<div key="foo">foo</div>, <div key="bar">bar</div>]}</MobileDrawer>);

  return {
    mab,
  };
}

it("renders without crashing", () => {
  const { mab } = setup();
  expect(mab).toMatchSnapshot();
});
