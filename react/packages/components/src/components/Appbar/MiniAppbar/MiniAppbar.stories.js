import React from "react";
import { storiesOf } from "@storybook/react";

import MiniAppBar from "./MiniAppbar";
import UserMenu from "../Usermenu/UserMenu";

storiesOf("MiniAppbar", module)
  .add("with drawer open", () => (
    <MiniAppBar
      title="test title"
      drawerOpen
      handleDrawerOpen={() => console.log("updateUserHandler clicked")}
      usermenu={<UserMenu revokeRefreshTokenHandler={() => console.log("rrth clicked")} />}
    />
  ))
  .add("with drawer closed", () => (
    <MiniAppBar
      title="test title"
      drawerOpen={false}
      handleDrawerOpen={() => console.log("updateUserHandler clicked")}
      usermenu={<UserMenu revokeRefreshTokenHandler={() => console.log("rrth clicked")} />}
    />
  ));
