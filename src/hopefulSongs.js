import React from "react";
import './App.css';


function HopefulSongs(props) {
    return (
        <div className="song-box">
            <iframe src={props.data} className="hyperlink" title="hopeful-song-frame"></iframe>
        </div>
    )
    
}; 

export default HopefulSongs; 