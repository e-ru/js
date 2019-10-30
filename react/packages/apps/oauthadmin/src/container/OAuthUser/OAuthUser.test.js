import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { OAuthUserComponent } from "./OAuthUser";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    oAuthUsers: [],
    match: {
      params: { id: 0 },
    },
    getUsersHanlder: jest.fn(),
    updateUserHandler: jest.fn(),
  };

  const wrapper = shallow(<OAuthUserComponent {...props} />);

  return {
    wrapper,
  };
}

describe("<OAuthUserComponent />", () => {
  test("renders", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
