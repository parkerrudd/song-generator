import React from "react";
import './App.css';
import continuumArt from "./images/continuum-artwork.jpeg"; 



function Songs(props) {
  const songList = [
        {songName: 'Gravity', 
        artistName: 'John Mayer', 
        Chill: true, 
        Introspective: true}, 
        {songName: 'Happy and Sad', 
        artistName: 'Kacey Musgraves', 
        Happy: true, 
        Sad: true, 
        Nostalgic: true, 
        Introspective: true}, 
        {songName: 'Circles', 
        artistName: 'Mac Miller', 
        Sad: true, 
        Chill: true, 
        Introspective: true, 
        Nostalgic: true}, 
        {songName: "At Least I'm Pretty", 
        artistName: 'Harriette', 
        Happy: true, 
        Chill: true, 
        Introspective: true}, 
        {songName: 'Summer, Highland Falls', 
        artistName: 'Billy Joel', 
        Energetic: true, 
        Hopeful: true, 
        Introspective: true}, 
        {songName: 'Cowboy in LA', 
        artistName: 'LANY', 
        Romantic: true, 
        Chill: true, 
        Happy: true}       
        ] 
    const songListFiltered = songList.filter(item => item.Happy === true) 
    const songDisplayed = songListFiltered[Math.floor(Math.random() * songListFiltered.length)] 
    return (
        <div className="song-box">
            <img src={continuumArt} alt="album artwork" />
            <h3>{songDisplayed.songName}</h3>
            <p>{songDisplayed.artistName}</p>
        </div>
    )
}

export default Songs; 