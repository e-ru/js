import React from "react";
import { storiesOf } from "@storybook/react";

import { MainComponent } from "./Main";

storiesOf("MainComponent", module)
  .add("with slider open", () => <MainComponent sideDrawerOpen />)
  .add("with slider close", () => <MainComponent sideDrawerOpen={false} />);
