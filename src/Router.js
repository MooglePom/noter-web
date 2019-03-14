import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from "./pages/index";
import Login from "./pages/login";
import Register from "./pages/register";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
};

export default AppRouter;
