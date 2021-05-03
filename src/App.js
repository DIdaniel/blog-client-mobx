import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
//import Counter from './components/Counter';
import Axios from "axios";
import Card from "./components/card section/Card";
import Header from "./components/header/Header";
import Login from "./components/login/Login";

// https://newsapi.org/docs/get-started
// GET : https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

const API = "d7bb277ef9b4433f8e13203fc2c46aa3";

function App() {
  const [newsUrl, setNewsUrl] = useState([]);

  useEffect(() => {
    Axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`)
      .then((res) => setNewsUrl(res.data.articles[0]))
      .then(console.log(newsUrl))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(async () => {
  //   try {
  //     const response = await Axios.get(
  //       `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`
  //     )
  //       .then((res) => setNewsUrl(res.data.articles[0]))
  //       .then(console.log(newUrl));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);

  return (
    <div className="App">
      <Switch>
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

// useEffect(() => {
//   const fetchNewsData = async() => {
//     const result = await Axios.get(url);
//     return result
//   }
//   const result = fetchNewsData
// }, [])
