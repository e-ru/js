import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./container/Login/LoginPage";
import ProtectedMainRoute from "./container/Login/ProtectedMainRoute";

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <ProtectedMainRoute path="/" />
    </Switch>
  );
};

export default App;
