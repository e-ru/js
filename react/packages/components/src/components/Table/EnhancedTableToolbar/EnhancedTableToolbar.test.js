import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import EnhancedTableToolbar from "./EnhancedTableToolbar";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    title: "test_title",
    numSelected: 0,
  };

  const wrapper = shallow(<EnhancedTableToolbar {...props} />);

  return {
    wrapper,
  };
}

describe("<EnhancedTableToolbar />", () => {
  test("renders", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
