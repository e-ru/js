import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { MIN_DESKTOP_WIDTH } from "../../constants/ui";

import ButtonAppBar from "../Appbar/ButtonAppBar";
import MiniDrawer from "../Navigation/MiniDrawer";
import MiniAppBarImpl from "../Navigation/MiniAppbarImpl";
import MiniDrawerImpl from "../Navigation/MiniDrawerImpl";

import TemporaryDrawer from "../Navigation/TemporaryDrawer";
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

      <MiniAppBarImpl />
      {isDesktop ? <MiniDrawerImpl /> : <TemporaryDrawer />}
      {/* <ButtonAppBar />
      {isDesktop ? <MiniDrawer /> : <TemporaryDrawer />} */}
      <Content />
    </div>
  );
};

export default Main;
