import React from "react";
import { storiesOf } from "@storybook/react";

import { LoginButtonComponent } from "./LoginButton";

storiesOf("LoginButtonComponent", module)
  .add("oAuthError is null", () => (
    <LoginButtonComponent
      oAuthError={null}
      showAuthWindowHandler={() => console.log("showAuthWindowHandler clicked")}
    />
  ))
  .add("oAuthError is not null", () => (
    <LoginButtonComponent oAuthError={{}} showAuthWindowHandler={() => console.log("showAuthWindowHandler clicked")} />
  ));
