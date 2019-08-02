import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";

import DrawerHomeContent from "./DrawerHomeContent";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const component = mount(
    <MemoryRouter>
      <DrawerHomeContent />
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});
