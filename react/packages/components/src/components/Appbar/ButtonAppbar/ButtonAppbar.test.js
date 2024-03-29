import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ButtonAppBar from "./ButtonAppBar";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    title: "test-title",
    handleDrawerOpen: jest.fn(),
  };

  const mab = shallow(
    <ButtonAppBar {...props}>
      <div />
    </ButtonAppBar>
  );

  return {
    mab,
  };
}

it("renders without crashing", () => {
  const { mab } = setup();
  expect(mab).toMatchSnapshot();
});
