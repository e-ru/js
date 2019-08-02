import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import EnhancedTableHead from "./EnhancedTableHead";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    numSelected: 0,
    order: "asc",
    orderBy: "username",
    rowCount: 5,
    headRows: [
      { id: "row1", numeric: false, disablePadding: true, label: "row1" },
      { id: "row2", numeric: false, disablePadding: false, label: "row2" },
    ],
    onRequestSort: jest.fn(),
    onSelectAllClick: jest.fn(),
  };

  const wrapper = shallow(<EnhancedTableHead {...props} />);

  return {
    wrapper,
  };
}

describe("<EnhancedTableHead />", () => {
  test("renders", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
