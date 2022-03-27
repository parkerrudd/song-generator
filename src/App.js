import React from 'react';
import './App.css';
import Moods from './moods'; 

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
          </div>
        </div>
    </div>
  );
}

export default App;
