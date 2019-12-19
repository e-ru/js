import * as ui from "./ui";
import * as oauth from "./oauth";

import applyMiddlewares from "../middleware";

// https://blog.jakoblind.no/code-your-own-combinereducers/
const combineReducers = reducers => (state = {}, action) => ({
  ...Object.entries(reducers)
    .map(([stateName, reducer]) => ({ [stateName]: reducer(state[stateName], action) }))
    .reduce((acc, cur) => {
      const stateName = Object.keys(cur);
      acc[stateName] = { ...cur[stateName] };
      return acc;
    }, {}),
});

const createReducer = handlers => (state, action) => handlers(state, action);

export const initialState = {
  ui: ui.initialState,
  oauth: oauth.initialState,
};

export default createReducer(
  combineReducers({
    ui: ui.reducer,
    oauth: oauth.reducer,
  })
);
