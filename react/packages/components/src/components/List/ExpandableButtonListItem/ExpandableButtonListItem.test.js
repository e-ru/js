import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HomeIcon from "@material-ui/icons/Home";
import ExpandableButtonListItem from "./ExpandableButtonListItem";

configure({ adapter: new Adapter() });

function setup(open) {
  const props = {
    title: "test title",
    open,
    icon: <HomeIcon />,
    handleClick: jest.fn(),
  };

  const wrapper = shallow(<ExpandableButtonListItem {...props} />);

  return {
    wrapper,
  };
}

describe("<ExpandableButtonListItem />", () => {
  test("renders", () => {
    const { wrapper } = setup(true);
    expect(wrapper).toMatchSnapshot();
  });
});
