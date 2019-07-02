import { TOGGLE_SIDE_DRAWER } from "../constants";

export const initialState = {
  sideDrawerOpen: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_DRAWER:
      return {
        ...state,
        sideDrawerOpen: action.sideDrawerOpen,
      };
    default:
      return state;
  }
};
