import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { OAuthUsersComponent } from "./OAuthUsers";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    getOAuthUsersInProgress: true,
    oAuthUsers: [],
    getUsersHanlder: jest.fn(),
  };

  const wrapper = shallow(<OAuthUsersComponent {...props} />);

  return {
    wrapper,
  };
}

describe("<OAuthUsers />", () => {
  test("renders", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
