import React from 'react';
import Counter from './components/Counter';

// https://newsapi.org/
// https://newsapi.org/docs/get-started
// https://newsapi.org/docs/get-started#top-headlines

// API : d7bb277ef9b4433f8e13203fc2c46aa3
// GET : https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY


function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
