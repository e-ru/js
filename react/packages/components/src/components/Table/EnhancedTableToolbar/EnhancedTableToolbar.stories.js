import React from "react";
import { storiesOf } from "@storybook/react";

import EnhancedTableToolbar from "./EnhancedTableToolbar";

storiesOf("EnhancedTableToolbar", module).add("render", () => <EnhancedTableToolbar title="main" numSelected={0} />);
