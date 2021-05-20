import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
// import axios from "axios";
import Login from "./components/login/Login";
import Navbar from "./components/navigationbar/Navbar";

import Signup from "./components/signup/Signup";
import Card from "./components/card-section/Card";
import Header from "./components/pages/common/header/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
