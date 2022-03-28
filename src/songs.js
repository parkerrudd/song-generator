import React from "react";
import './App.css';
import continuumArt from "./images/continuum-artwork.jpeg"; 

const songList = [
    {songName: 'Gravity', 
    artistName: 'John Mayer', 
    attributes: ['Chill', 'Introspective']}, 
    {songName: 'Happy and Sad', 
    artistName: 'Kacey Musgraves', 
    attributes: ['Happy', 'Sad', 'Nostalgic', 'Introspective']}, 
    {songName: 'Circles', 
    artistName: 'Mac Miller', 
    attributes: ['Sad', 'Chill', 'Introspective', 'Nostalgic']}, 
    {songName: "At Least I'm Pretty", 
    artistName: 'Harriette', 
    attributes: ['Happy', 'Chill', 'Introspective']}, 
    {songName: 'Summer, Highland Falls', 
    artistName: 'Billy Joel', 
    attributes: ['Energetic', 'Hopeful', 'Introspective']}, 
    {songName: 'Cowby in LA', 
    artistName: 'LANY', 
    attributes: ['Romantic', 'Chill', 'Happy']}       
    ]

function generate() {
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
    {songName: 'Cowby in LA', 
    artistName: 'LANY', 
    Romantic: true, 
    Chill: true, 
    Happy: true}       
    ]

    const songDisplayed = songList.filter(item => item.Happy === true) 
    return songDisplayed; 
}



function Songs(props) {
    return (
        <div className="song-box">
            <img src={continuumArt} alt="album artwork" />
            <h3>{props.songName}</h3>
            <p>{props.artistName}</p>
        </div>
    )
}

export default Songs; 