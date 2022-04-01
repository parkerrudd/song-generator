import React, { Component, useState }from 'react';
import './App.css';
import Moods from './moods'; 
import Songs from './songs'; 
import songGeneration from './generator'; 

function App() {

 

 
  return (
    <div className="App">
      <h1 id='header'>How Are You Feeling?</h1>
        <div className="mood-selectors-container">
          <div className="mood-selectors">
            <Moods />
          </div>
        </div>
        
        
    </div>
  );
}

export default App;
