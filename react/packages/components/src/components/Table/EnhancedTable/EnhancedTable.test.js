import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import EnhancedTable from "./EnhancedTable";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    title: "test title",
    rows: [],
    headRows: [
      { id: "row1", numeric: false, disablePadding: true, label: "row1" },
      { id: "row2", numeric: false, disablePadding: false, label: "row2" },
    ],
    tableRowComponent: jest.fn(),
  };

  const wrapper = shallow(<EnhancedTable {...props} />);

  return {
    wrapper,
  };
}

describe("<EnhancedTable />", () => {
  test("renders", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
