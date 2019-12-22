import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

export const StateContext = createContext();

const compose = (...funcs) => x => {
  const red = funcs.reduceRight((composed, f) => {
    return f(composed);
  }, x);
  return red;
};

const createStore = ([state, dispatch], middlewares) => {
  if (typeof middlewares !== "undefined") {
    // return middlewares(createStore)(reducer, initialState);
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
