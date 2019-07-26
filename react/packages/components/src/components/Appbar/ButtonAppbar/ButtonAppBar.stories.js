import React from "react";
import { storiesOf } from "@storybook/react";

import ButtonAppBar from "./ButtonAppBar";
import Usermenu from "../Usermenu";

storiesOf("ButtonAppBar", module)
  .add("with drawer open", () => (
    <ButtonAppBar title="test title" handleDrawerOpen={() => console.log("hdo clicked")}>
      <Usermenu entries={[]} />
    </ButtonAppBar>
  ))
  .add("with drawer closed", () => (
    <ButtonAppBar title="test title" handleDrawerOpen={() => console.log("hdo clicked")}>
      <Usermenu entries={[]} />
    </ButtonAppBar>
  ));
