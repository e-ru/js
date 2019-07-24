import React from "react";
import { storiesOf } from "@storybook/react";

import User from "../components/oauthadmin/Users/User";

storiesOf("User", module)
  .add("with user", () => (
    <User
      usersRefreshedAfterUserUpdate={false}
      users={[
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
      usersPath=""
      updateUserHandler={() => console.log("updateUserHandler clicked")}
    />
  ))
  .add("with no user", () => (
    <User
      usersRefreshedAfterUserUpdate={false}
      users={[]}
      match={{ params: { id: 0 } }}
      usersPath=""
      updateUserHandler={() => console.log("updateUserHandler clicked")}
    />
  ));
