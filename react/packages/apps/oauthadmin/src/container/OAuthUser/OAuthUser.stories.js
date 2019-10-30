import React from "react";
import { storiesOf } from "@storybook/react";

import { OAuthUserComponent } from "./OAuthUser";

storiesOf("OAuthUser", module)
  .add("with user", () => (
    <OAuthUserComponent
      oAuthUsers={[
        {
          id: 0,
          username: "test_user_1",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 1,
          username: "test_user_1",
          email: "q@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
      ]}
      match={{ params: { id: 0 } }}
      getUsersHanlder={() => console.log("getUsersHanlder clicked")}
      updateUserHandler={() => console.log("updateUserHandler clicked")}
    />
  ))
  .add("with no user", () => (
    <OAuthUserComponent
      oAuthUsers={[]}
      match={{ params: { id: 0 } }}
      getUsersHanlder={() => console.log("getUsersHanlder clicked")}
      updateUserHandler={() => console.log("updateUserHandler clicked")}
    />
  ));
