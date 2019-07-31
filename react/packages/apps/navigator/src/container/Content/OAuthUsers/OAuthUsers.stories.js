import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import { OAuthUsersComponent } from "./OAuthUsers";

storiesOf("OAuthUsers", module).add("render", () => (
  <MemoryRouter>
    <OAuthUsersComponent
      getOAuthUsersInProgress={false}
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
          username: "test_user_2",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 2,
          username: "test_user_3",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 3,
          username: "test_user_4",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 4,
          username: "test_user_5",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 5,
          username: "test_user_6",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 6,
          username: "test_user_7",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 7,
          username: "test_user_1",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 8,
          username: "test_user_1",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 9,
          username: "test_user_1",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 10,
          username: "test_user_1",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 11,
          username: "test_user_1",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
        {
          id: 12,
          username: "test_user_1",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        },
      ]}
      getUsersHanlder={() => console.log("getUsersHanlder clicked")}
    />
  </MemoryRouter>
));
