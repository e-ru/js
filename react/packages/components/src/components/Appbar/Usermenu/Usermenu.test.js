import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Usermenu from "./Usermenu";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    entries: [],
  };

  const um = shallow(<Usermenu {...props} />);

  return {
    um,
  };
}

it("renders without crashing", () => {
  const { um } = setup();
  expect(um).toMatchSnapshot();
});
