import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import OAuthUserTableRow from "./OAuthUserTableRow";

storiesOf("OAuthUserTableRow", module)
  .add("with row", () => (
    <MemoryRouter>
      <OAuthUserTableRow
        row={{
          id: 0,
          username: "test_user_1",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        }}
        labelId="test_label_id"
        isItemSelected
        handleClick={() => console.log("handleClick clicked")}
      />
    </MemoryRouter>
  ))
  .add("not selected", () => (
    <MemoryRouter>
      <OAuthUserTableRow
        row={{
          id: 0,
          username: "test_user_1",
          email: "t@b.d",
          enabled: true,
          accountLocked: false,
          accountExpired: false,
        }}
        labelId="test_label_id"
        isItemSelected={false}
        handleClick={() => console.log("handleClick clicked")}
      />
    </MemoryRouter>
  ));
