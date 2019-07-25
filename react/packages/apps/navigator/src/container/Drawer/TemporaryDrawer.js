import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";

import { EXPANDABLE_LIST_ITEM_CLASS } from "../../constants/ui";

import DrawerInitialContent from "./DrawerInitialContent";

import { setShowSideDrawer } from "../../actions/ui";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const TemporaryDrawerComponent = ({ sideDrawerOpen, drawerToggleClickHandler }) => {
  const classes = useStyles();

  const onClickKeyDown = e => {
    const isExpandleListItem = e.target.closest(`.${EXPANDABLE_LIST_ITEM_CLASS}`);
    if (!isExpandleListItem) drawerToggleClickHandler(false);
  };

  const leftList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={e => onClickKeyDown(e)}
      onKeyDown={e => onClickKeyDown(e)}
    >
      <DrawerInitialContent />
      <Divider />
    </div>
  );

  return (
    <Drawer open={sideDrawerOpen} onClose={() => drawerToggleClickHandler(false)}>
      {leftList()}
    </Drawer>
  );
};

TemporaryDrawerComponent.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
  drawerToggleClickHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sideDrawerOpen: state.ui.sideDrawerOpen,
});

const mapDispatchToProps = {
  drawerToggleClickHandler: () => (dispatch, getState) => dispatch(setShowSideDrawer(!getState().ui.sideDrawerOpen)),
};

const TemporaryDrawer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemporaryDrawerComponent);

export default TemporaryDrawer;
