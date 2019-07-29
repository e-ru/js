import React from "react";
import { shallow } from "enzyme";
import OAuthUserTableRow from "./OAuthUserTableRow";

describe("<Users />", () => {
  test("renders", () => {
    const wrapper = shallow(<OAuthUserTableRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
