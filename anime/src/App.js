import React from 'react';
import './App.scss';

// components 
import AnimeList from './components/AnimeList.js';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Let's Watch Anime!</h1>
        <h2>我们看动画吧！</h2>
      </div>
      <AnimeList />
    </div>
  );
}

export default App;
