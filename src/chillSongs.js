import React, { useState } from "react";
import './App.css';
import axios from 'axios'; 

function ChillSongs(props) {
    return (
        <div className="song-box">
            <iframe src={props.data} className="hyperlink"></iframe>
        </div>
    )
} 
export default ChillSongs; 