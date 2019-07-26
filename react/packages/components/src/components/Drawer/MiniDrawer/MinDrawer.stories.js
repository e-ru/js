import React from "react";
import { storiesOf } from "@storybook/react";

import MiniDrawer from "./MiniDrawer";

storiesOf("MiniDrawer", module)
  .add("with drawer open", () => (
    <MiniDrawer
      sideDrawerOpen
      sideDrawerOpenHandler={() => console.log("sideDrawerOpenHandler clicked")}
      drawerContent={[]}
    />
  ))
  .add("with drawer closed", () => (
    <MiniDrawer
      drawerOpen={false}
      sideDrawerOpenHandler={() => console.log("sideDrawerOpenHandler clicked")}
      drawerContent={[]}
    />
  ));
