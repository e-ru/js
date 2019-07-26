import React from "react";
import { storiesOf } from "@storybook/react";

import ButtonAppBar from "./ButtonAppBar";
import UserMenu from "../Usermenu/UserMenu";

storiesOf("ButtonAppBar", module)
  .add("with drawer open", () => (
    <ButtonAppBar
      title="test title"
      handleDrawerOpen={() => console.log("hdo clicked")}
      usermenu={<UserMenu revokeRefreshTokenHandler={() => console.log("rrth clicked")} />}
    />
  ))
  .add("with drawer closed", () => (
    <ButtonAppBar
      title="test title"
      handleDrawerOpen={() => console.log("hdo clicked")}
      usermenu={<UserMenu revokeRefreshTokenHandler={() => console.log("rrth clicked")} />}
    />
  ));
