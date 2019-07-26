import React from "react";
import { storiesOf } from "@storybook/react";

import MiniDrawer from "./MiniDrawer";

storiesOf("MiniDrawer", module)
  .add("with drawer open", () => (
    <MiniDrawer sideDrawerOpen sideDrawerOpenHandler={() => console.log("sideDrawerOpenHandler clicked")}>
      {[<div key="foo">foo</div>, <div key="bar">bar</div>]}
    </MiniDrawer>
  ))
  .add("with drawer closed", () => (
    <MiniDrawer sideDrawerOpen={false} sideDrawerOpenHandler={() => console.log("sideDrawerOpenHandler clicked")}>
      {[<div key="foo">foo</div>, <div key="bar">bar</div>]}
    </MiniDrawer>
  ));
