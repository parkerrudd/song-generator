import React, { useState } from "react";
import './App.css';

function ChillSongs(props) {
    return (
        <div className="song-box">
            <iframe src={props.data} className="hyperlink"></iframe>
        </div>
    )
} 
export default ChillSongs; 