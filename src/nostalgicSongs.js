import React, { useEffect, useState } from "react";
import './App.css'; 

function NostalgicSongs(props) {

    return (
        <div className="song-box">
            <iframe src={props.data} className="hyperlink"></iframe>
        </div>
    )
    
}

export default NostalgicSongs; 