import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import { EXPANDABLE_LIST_ITEM_CLASS } from "../../../constants/ui";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const MobileDrawer = props => {
  const classes = useStyles();
  const { sideDrawerOpen, sideDrawerOpenHandler, children } = props;

  const onClickKeyDown = e => {
    const isExpandleListItem = e.target.closest(`.${EXPANDABLE_LIST_ITEM_CLASS}`);
    if (!isExpandleListItem) sideDrawerOpenHandler(false);
  };

  return (
    <Drawer open={sideDrawerOpen} onClose={() => sideDrawerOpenHandler(false)}>
      <div
        className={classes.list}
        role="presentation"
        onClick={e => onClickKeyDown(e)}
        onKeyDown={e => onClickKeyDown(e)}
      >
        {children}
      </div>
    </Drawer>
  );
};

MobileDrawer.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
  sideDrawerOpenHandler: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default MobileDrawer;
