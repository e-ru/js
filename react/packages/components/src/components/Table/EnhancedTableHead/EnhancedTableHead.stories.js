import React from "react";
import { storiesOf } from "@storybook/react";

import EnhancedTableHead from "./EnhancedTableHead";

storiesOf("EnhancedTableHead", module).add("main item", () => (
  <EnhancedTableHead
    numSelected={0}
    order="asc"
    orderBy="username"
    rowCount={5}
    headRows={[
      { id: "row1", numeric: false, disablePadding: true, label: "row1" },
      { id: "row2", numeric: false, disablePadding: false, label: "row2" },
    ]}
    onRequestSort={() => console.log("onRequestSort clicked")}
    onSelectAllClick={() => console.log("onSelectAllClick clicked")}
  />
));
