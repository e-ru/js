import { configure } from "@storybook/react";

const comp = require.context(
  "@e-ru/components/src/components",
  true,
  /\.stories\.js$/
);
const nav = require.context(
  "@e-ru/navigator/src/container",
  true,
  /\.stories\.js$/
);

function loadStories() {
  console.log("comp ", comp);
  //require("../src/stories/index.js");
  // You can require as many stories as you need.
  comp.keys().forEach(filename => comp(filename));
  nav.keys().forEach(filename => nav(filename));
}

configure(loadStories, module);
