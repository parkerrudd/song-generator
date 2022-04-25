import React from "react";
import './App.css';

function RomanticSongs(props) {

    return (
        <div className="song-box">
            <iframe src={props.data} className="hyperlink"></iframe>
        </div>
    )
            
}; 

export default RomanticSongs; 