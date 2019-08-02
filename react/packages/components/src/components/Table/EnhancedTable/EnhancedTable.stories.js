import React from "react";
import { storiesOf } from "@storybook/react";

import EnhancedTable from "./EnhancedTable";

storiesOf("EnhancedTable", module).add("main item", () => (
  <EnhancedTable
    title="test title"
    rows={[]}
    headRows={[
      { id: "row1", numeric: false, disablePadding: true, label: "row1" },
      { id: "row2", numeric: false, disablePadding: false, label: "row2" },
    ]}
    tableRowComponent={() => console.log("onClickHandler clicked")}
  />
));
