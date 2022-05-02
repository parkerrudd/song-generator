import React from "react";
import './App.css';

function RomanticSongs(props) {

    return (
        <div className="song-box">
            <iframe src={props.data} className="hyperlink" title="romantic-song-frame"></iframe>
        </div>
    )
            
}; 

export default RomanticSongs; 