import React, { useState } from "react";
import './App.css';
import SongData from './songData.json'; 

function Songs() {
        
    const songListFiltered = SongData.filter(item => item.Happy) 
    const songDisplayed = songListFiltered[Math.floor(Math.random() * songListFiltered.length)] 
    
    return (
        <div className="song-box">
        <iframe className="hyperlink" src={songDisplayed.hyperlink}></iframe>
            {/*<h3>{songDisplayed.songName}</h3>
            <p>{songDisplayed.artistName}</p>*/}
        </div>
    )
    
    
}

export default Songs; 