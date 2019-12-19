import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { apiMiddleware } from "redux-api-middleware";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { StoreProvider } from "./store";
import reducers, { initialState } from "./reducers";

const logMiddleware = store => next => action => {
  console.log("Action Triggered");
  console.log(action);
  next(action);
};

ReactDOM.render(
  <Router>
    <StoreProvider initialState={initialState} reducer={reducers} middlewares={[logMiddleware, apiMiddleware]}>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
