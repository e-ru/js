import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import OAuthUserTableRow from "./OAuthUserTableRow";

storiesOf("OAuthUserTableRow", module)
  .add("selected", () => (
    <MemoryRouter>
      <Table>
        <TableBody>
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
        </TableBody>
      </Table>
    </MemoryRouter>
  ))
  .add("not selected", () => (
    <MemoryRouter>
      <Table>
        <TableBody>
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
        </TableBody>
      </Table>
    </MemoryRouter>
  ));
