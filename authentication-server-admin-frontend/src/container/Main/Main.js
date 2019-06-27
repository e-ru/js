import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import ButtonAppBar from "../Toolbar/ButtonAppBar";
import MiniDrawer from "../MiniDrawer/MiniDrawer";
import TemporaryDrawer from "../MiniDrawer/TemporaryDrawer";
import Content from "../Content/Content";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Main = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ButtonAppBar />
      {isMobile ? <TemporaryDrawer /> : <MiniDrawer />}
      <Content />
    </div>
  );
};

export default Main;
