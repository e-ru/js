import React from "react";
import { storiesOf } from "@storybook/react";

import MiniAppBar from "./MiniAppbar";
import Usermenu from "../Usermenu";

storiesOf("MiniAppbar", module)
  .add("with drawer open", () => (
    <MiniAppBar title="test title" drawerOpen handleDrawerOpen={() => console.log("updateUserHandler clicked")}>
      <Usermenu entries={[]} />
    </MiniAppBar>
  ))
  .add("with drawer closed", () => (
    <MiniAppBar title="test title" drawerOpen={false} handleDrawerOpen={() => console.log("updateUserHandler clicked")}>
      <Usermenu entries={[]} />
    </MiniAppBar>
  ));
