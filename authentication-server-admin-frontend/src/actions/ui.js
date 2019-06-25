import { TOGGLE_SIDE_DRAWER } from "../constants";

const setShowSideDrawer = sideDrawerOpen => ({
  type: TOGGLE_SIDE_DRAWER,
  sideDrawerOpen,
});

export default setShowSideDrawer;
