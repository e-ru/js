import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import DrawerHomeContent from "./DrawerHomeContent";

storiesOf("DrawerHomeContent", module).add("with drawer open", () => (
  <MemoryRouter initialEntries={["/"]}>
    <DrawerHomeContent />
  </MemoryRouter>
));
