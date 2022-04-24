import React from "react";
import './App.css';
import SongData from './songData.json'; 

 

function SadSongs() {
    const songListFiltered = SongData.filter(item => item.Sad === true) 
    const songDisplayed = songListFiltered[Math.floor(Math.random() * songListFiltered.length)] 
    return (
        <div className="song-box">
        <iframe className="hyperlink" src="https://open.spotify.com/embed/playlist/5KEyQrelBJ8nWOHctbkQv4?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            {/*<iframe src={songDisplayed.hyperlink} className="hyperlink"></iframe>
           <h3>{songDisplayed.songName}</h3>
            <p>{songDisplayed.artistName}</p>*/}
        </div>
    )
}

export default SadSongs; 