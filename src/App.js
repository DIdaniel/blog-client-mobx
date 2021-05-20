import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
// import axios from "axios";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Header from "./components/pages/common/header/Header";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      <Header />
    </>
  );
}

export default App;
