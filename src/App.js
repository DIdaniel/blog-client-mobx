import React from "react";
import { Route, Switch } from "react-router-dom";
// import axios from "axios";
import Navbar from "./components/pages/common/navbar/Navbar";
import Body from "./components/pages/common/body/Body";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import Header from "./components/pages/common/header/Header";
import Footer from "./components/pages/common/footer/Footer";
import MainPage from "./components/pages/main-page/MainPage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
