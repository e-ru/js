import React from "react";
import { shallow } from "enzyme";
import OAuthUser from "./OAuthUser";

describe("<Users />", () => {
  test("renders", () => {
    const wrapper = shallow(<OAuthUser />);
    expect(wrapper).toMatchSnapshot();
  });
});
