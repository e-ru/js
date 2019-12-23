import { setShowSideDrawer } from "../actions/ui";

const logMiddleware = store => next => action => {
  console.log("Action Triggered");
  console.log(action);
  store.dispatch(setShowSideDrawer(false));
  next(action);
};

export default logMiddleware;
