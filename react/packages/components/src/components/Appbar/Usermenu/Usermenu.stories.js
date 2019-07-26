import React from "react";
import { storiesOf } from "@storybook/react";

import Usermenu from "./Usermenu";

const usermenuEntries = () => {
  const entries = [];

  entries.push({ title: "Settings", func: () => console.log("settings clicked") });
  entries.push({ title: "Logout", func: () => console.log("logout clicked") });

  return entries;
};

storiesOf("Usermenu", module)
  .add("with entries", () => <Usermenu entries={usermenuEntries()} />)
  .add("without entries", () => <Usermenu entries={[]} />);
