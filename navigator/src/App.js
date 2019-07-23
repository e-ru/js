import React from "react";
import { Route, Switch } from "react-router-dom";

import ProtectedMainRoute from "./container/Login/ProtectedMainRoute";
import LoginPage from "./container/Login/LoginPage";

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <ProtectedMainRoute path="/" />
    </Switch>
  );
};

export default App;
