import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "../components/Homepage";

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
