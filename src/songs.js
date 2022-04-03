import React from "react";
import './App.css';
import SongData from './songData.json'; 
import {Moods, checkedBoxes} from "./moods";

 

function Songs() {
    const songListFiltered = SongData.filter(item => item.Happy === true) 
    const songDisplayed = songListFiltered[Math.floor(Math.random() * songListFiltered.length)] 
    return (
        <div className="song-box">
            <img src={songDisplayed.artwork} alt="album artwork" />
            <h3>{songDisplayed.songName}</h3>
            <p>{songDisplayed.artistName}</p>
        </div>
    )
}

export default Songs; 