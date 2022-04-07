import React from "react";
import './App.css';
import SongData from './songData.json'; 

 

function HopefulSongs() {
    const songListFiltered = SongData.filter(item => item.Hopeful === true) 
    const songDisplayed = songListFiltered[Math.floor(Math.random() * songListFiltered.length)] 
    
    return (
        <div className="song-box">
            <iframe src={songDisplayed.hyperlink} className="hyperlink"></iframe>
            {/*<h3>{songDisplayed.songName}</h3>
            <p>{songDisplayed.artistName}</p>*/}
        </div>
    )
    
}

export default HopefulSongs; 