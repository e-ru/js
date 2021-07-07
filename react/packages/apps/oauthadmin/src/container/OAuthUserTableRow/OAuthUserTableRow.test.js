import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import OAuthUserTableRow from "./OAuthUserTableRow";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    row: {
      id: 0,
      username: "test_user_1",
      email: "t@b.d",
      enabled: true,
      accountLocked: false,
      accountExpired: false,
    },
    labelId: "test_label_id",
    isItemSelected: true,
    handleClick: jest.fn(),
  };

  const wrapper = shallow(<OAuthUserTableRow {...props} />);

  return {
    wrapper,
  };
}

describe("<OAuthUserTableRow />", () => {
  test("renders", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
