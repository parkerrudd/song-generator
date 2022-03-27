import React from "react";
import './App.css';
import continuumArt from "./images/continuum-artwork.jpeg"; 

function Songs(props) {
    return (
        <div className="song-box">
            <img src={continuumArt} alt="album artwork" />
            <h3>{props.songName}</h3>
            <p>{props.artistName}</p>
        </div>
    )
}

export default Songs; 