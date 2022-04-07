import React, { Component, useState }from 'react';
import './App.css';
import Moods from './moods'; 

function App() {

 const [background, setBackground] = useState("url(/images/layered-waves-haikei.svg)")
 const [bgRain, setbgRain] = useState("")

  return (
    <div className={bgRain}>
      <div className="App" style={{ backgroundImage: background }}>
        <h1 id='header'>How Are You Feeling?</h1>
          <div className="mood-selectors-container">
            <div className="mood-selectors">
              <Moods updateBackground={background => setBackground(background)} addRain={bgRain => setbgRain(bgRain)}/>
            </div>
          </div>
      
      
      </div>
    </div>
  );
}

export default App;
