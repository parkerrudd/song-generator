import React, { Component, useState }from 'react';
import './App.css';
import Moods from './moods'; 
import Songs from './songs'; 
import songGeneration from './generator'; 

function App() {

  const [songDisplay, setSongDisplay] = useState(false); 

  return (
    <div className="App">
      <h1 id='header'>How Are You Feeling?</h1>
        <div className="mood-selectors-container">
          <div className="mood-selectors">
            <Moods name='Happy' />
            <Moods name='Sad' />
            <Moods name='Chill' />
            <Moods name='Hopeful' />
            <Moods name='Nostalgic' />
            <Moods name='Energetic' />
            <Moods name='Introspective' />
            <Moods name='Angry' />
            <Moods name='Romantic' />
          </div>
        </div>
        <div className="btn">
          <button onClick={() => setSongDisplay(!songDisplay)}>Submit</button>
        </div>
        <div className="generator" id=''>
          { songDisplay && <Songs/>}
        </div>
    </div>
  );
}

export default App;
