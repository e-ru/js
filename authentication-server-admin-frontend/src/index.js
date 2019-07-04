import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import createPreloadMiddleware from "./middleware/preloadMiddleware";
import createOAuthMiddleware from "./middleware/oauthMiddleware";
import rootReducer from "./reducers";

import { preload } from "./utils/initializer";

const store = compose(applyMiddleware(apiMiddleware, thunk, createOAuthMiddleware(), createPreloadMiddleware()))(
  createStore
)(rootReducer);

// preload data
preload(store.dispatch);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
