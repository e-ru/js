import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Appbar from "../Navigation/Appbar";
import Drawer from "../Navigation/Drawer";

import Content from "../Content/Content";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar />
      <Drawer />
      <Content />
    </div>
  );
};

export default Main;
