import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import axios from "axios";
import Login from "./components/login/Login";
import Navbar from "./components/navigationbar/Navbar";
import Header from "./components/header/Header";
import Signup from "./components/signup/Signup";
import Card from "./components/card-section/Card";

function App() {
  const [newsUrl, setNewsUrl] = useState([]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>

        <Header />
        <Card newsUrl={newsUrl} />
        <Card newsUrl={newsUrl} />
      </Switch>
    </div>
  );
}

export default App;
