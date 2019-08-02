import React from "react";
import { storiesOf } from "@storybook/react";

import HomeIcon from "@material-ui/icons/Home";
import ExpandableButtonListItem from "./ExpandableButtonListItem";

storiesOf("ExpandableButtonListItem", module)
  .add("closed", () => (
    <ExpandableButtonListItem
      open={false}
      title="main"
      icon={<HomeIcon />}
      onClickHandler={() => console.log("onClickHandler clicked")}
    />
  ))
  .add("open", () => (
    <ExpandableButtonListItem
      open
      title="main"
      icon={<HomeIcon />}
      onClickHandler={() => console.log("onClickHandler clicked")}
    />
  ));
