import React from 'react';
import './App.css';
import Moods from './moods'; 
import Songs from './songs'; 

function App() {
  return (
    <div className="App">
      <h1 id='header'>Select All Moods That Apply</h1>
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
          <button>Submit</button>
        </div>
        <div className="generator">
          <Songs songName='Gravity' artistName='John Mayer'/>
        </div>
    </div>
  );
}

export default App;
