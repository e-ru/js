import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ButtonListItem from "./ButtonListItem";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    title: "test_title",
    icon: {},
  };

  const wrapper = shallow(<ButtonListItem {...props} />);

  return {
    wrapper,
  };
}

describe("<ButtonListItem />", () => {
  test("renders", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
