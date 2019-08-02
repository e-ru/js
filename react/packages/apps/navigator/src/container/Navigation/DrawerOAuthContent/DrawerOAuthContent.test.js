import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";

import DrawerOAuthContent from "./DrawerOAuthContent";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const component = mount(
    <MemoryRouter>
      <DrawerOAuthContent />
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});
