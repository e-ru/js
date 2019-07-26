import React from "react";
import { storiesOf } from "@storybook/react";

import MobileDrawer from "./MobileDrawer";

storiesOf("MobileDrawer", module)
  .add("with drawer open", () => (
    <MobileDrawer sideDrawerOpen sideDrawerOpenHandler={() => console.log("sideDrawerOpenHandler clicked")}>
      {[<div key="foo">foo</div>, <div key="bar">bar</div>]}
    </MobileDrawer>
  ))
  .add("with drawer closed", () => (
    <MobileDrawer sideDrawerOpen={false} sideDrawerOpenHandler={() => console.log("sideDrawerOpenHandler clicked")}>
      {[<div key="foo">foo</div>, <div key="bar">bar</div>]}
    </MobileDrawer>
  ));
