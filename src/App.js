import React, {useState, useEffect} from 'react';
import './App.css';
//import Counter from './components/Counter';
import Axios from 'axios';
import Card from './components/card section/Card';
import Header from './components/header/Header';

// https://newsapi.org/docs/get-started
// GET : https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

const API = 'd7bb277ef9b4433f8e13203fc2c46aa3'


function App() {

  const [newsUrl, setNewsUrl] = useState([]);

  useEffect(() => {
    Axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`)
      .then(res => setNewsUrl(res.data.articles[0]))
      .then(console.log(newsUrl))
  }, [])

  return (
    <div className="App">
      <Header />
      <Card newsUrl={newsUrl} />
      <Card newsUrl={newsUrl} />
      <Card newsUrl={newsUrl} />
      <Card newsUrl={newsUrl} />
    </div>
  );
}

export default App;
