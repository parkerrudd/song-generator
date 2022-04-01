import React, { Component, useState }from 'react';
import './App.css';
import Moods from './moods'; 
import Songs from './songs'; 
import songGeneration from './generator'; 

function App() {

  const [songDisplay, setSongDisplay] = useState(false); 
  const [selectedValue, setSelectedValue] = useState('')

  const clicked = () => {
    setSelectedValue('Sad')
  }
  return (
    <div className="App">
      <h1 id='header'>How Are You Feeling?</h1>
        <div className="mood-selectors-container">
          <div className="mood-selectors">
            <Moods name='Happy' />
            <Moods name='Sad' />
            <Moods name='Chill' />
            <Moods name='Hopeful' />
            <button onClick={() => clicked()}>Sad</button>
            <Moods name='Nostalgic' />
            <Moods name='Energetic' />
            <Moods name='Introspective' />
            <Moods name='Angry' />
            <Moods name='Romantic' />
          </div>
        </div>
        <div className="btn">
          <button onClick={() => setSongDisplay(!songDisplay)}>Find Your Song</button>
        </div>
        <div className="generator">
          { songDisplay ? <Songs clicked={selectedValue}/> : <Songs clicked={selectedValue}/> }
        </div>
    </div>
  );
}

export default App;
