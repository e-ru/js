import React from "react";
import { storiesOf } from "@storybook/react";

import HomeIcon from "@material-ui/icons/Home";
import ButtonListItem from "./ButtonListItem";

storiesOf("ButtonListItem", module)
  .add("main item", () => (
    <ButtonListItem
      subItem={false}
      title="main"
      icon={<HomeIcon />}
      onClickHandler={() => console.log("onClickHandler clicked")}
    />
  ))
  .add("sub item", () => (
    <ButtonListItem
      subItem
      title="main"
      icon={<HomeIcon />}
      onClickHandler={() => console.log("onClickHandler clicked")}
    />
  ));
