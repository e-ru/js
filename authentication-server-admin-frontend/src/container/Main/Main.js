import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { MIN_DESKTOP_WIDTH } from "../../constants";

import ButtonAppBar from "../Appbar/ButtonAppBar";
import MiniDrawer from "../Drawer/MiniDrawer";
import TemporaryDrawer from "../Drawer/TemporaryDrawer";
import Content from "../Content/Content";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Main = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:${MIN_DESKTOP_WIDTH})`);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ButtonAppBar />
      {isDesktop ? <MiniDrawer /> : <TemporaryDrawer />}
      <Content />
    </div>
  );
};

export default Main;
