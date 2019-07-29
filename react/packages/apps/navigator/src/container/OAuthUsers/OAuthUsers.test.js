import React from "react";
import { shallow } from "enzyme";
import OAuthUsers from "./OAuthUsers";

describe("<Users />", () => {
  test("renders", () => {
    const wrapper = shallow(<OAuthUsers />);
    expect(wrapper).toMatchSnapshot();
  });
});
