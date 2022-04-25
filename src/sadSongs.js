import React from "react";
import './App.css';

function SadSongs(props) {
    return (
        <div className="song-box">
            <iframe src={props.data} className="hyperlink"></iframe>
        </div>
    )
    
}

export default SadSongs; 