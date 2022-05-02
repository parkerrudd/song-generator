import React from "react";
import './App.css';

function ChillSongs(props) {
    return (
        <div className="song-box">
            <iframe src={props.data} className="hyperlink" title="chill-song-frame"></iframe>
        </div>
    )
} 
export default ChillSongs; 