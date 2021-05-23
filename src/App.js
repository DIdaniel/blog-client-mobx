import React from "react";

import { Route, Switch } from "react-router-dom";
// import axios from "axios";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import Header from "./components/pages/common/header/Header";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
