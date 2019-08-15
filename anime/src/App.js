import React from 'react';
import './App.sass';

// components 
import AnimeList from './components/AnimeList.js';

function App() {
  return (
    <div className="App">
      <h1 id="header">Let's Watch Anime!</h1>
      <h2 id="chinese-header">我们看动画吧！</h2>
      <AnimeList />
    </div>
  );
}

export default App;
