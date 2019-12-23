import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

export const StateContext = createContext();

// reducer

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

export const createReducer = reducers => (state, action) => combineReducers(reducers)(state, action);

// store

const compose = (...funcs) => dispatch => {
  const red = funcs.reduceRight((composed, middleware) => {
    return middleware(composed);
  }, dispatch);
  return red;
};

const createStore = ([state, dispatch], middlewares) => {
  if (typeof middlewares !== "undefined") {
    const middlewareAPI = {
      getState: () => state,
      dispatch: action => dispatch(action),
    };
    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    const enhancedDispatch = compose(...chain)(dispatch);
    return { state, dispatch: enhancedDispatch };
  }
  return { state, dispatch };
};

export const StoreProvider = ({ reducer, initialState, middlewares, children }) => {
  const { state, dispatch } = createStore(useReducer(reducer, initialState), middlewares);
  console.log("state: ", state);
  return <StateContext.Provider value={[state, dispatch]} children={children} />;
};

StoreProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  middlewares: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export const useStore = () => useContext(StateContext);
