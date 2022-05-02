import React from "react";
import './App.css'; 

function NostalgicSongs(props) {

    return (
        <div className="song-box">
            <iframe src={props.data} className="hyperlink" title="nostalgic-song-frame"></iframe>
        </div>
    )
    
}

export default NostalgicSongs; 