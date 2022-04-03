import React from "react";
import './App.css';
import SongData from './songData.json'; 
import {Moods, checkedBoxes} from "./moods";
import continuumArt from "./images/continuum-artwork.jpeg"; 
import cowboyInLAArt from './images/Cowboy in LA-artwork.jpg'; 
import goldenHour from './images/goldenHour-artwork.jpg'; 
import circlesArt from './images/circles-artwork.jpg';
import atLeastImPrettyArt from './images/at-least-im-pretty-artwork.jpg';
import summerHighlandFallsArt from './images/summer-highland-falls-art.jpg';
 

function Songs(props) {
  
//   const songList = [
//         {songName: 'Gravity', 
//         artistName: 'John Mayer', 
//         artwork: continuumArt, 
//         Chill: true, 
//         Introspective: true}, 
//         {songName: 'Happy and Sad', 
//         artistName: 'Kacey Musgraves', 
//         artwork: goldenHour,
//         Happy: true, 
//         Sad: true, 
//         Nostalgic: true, 
//         Introspective: true}, 
//         {songName: 'Circles', 
//         artistName: 'Mac Miller', 
//         artwork: circlesArt,
//         Sad: true, 
//         Chill: true, 
//         Introspective: true, 
//         Nostalgic: true}, 
//         {songName: "At Least I'm Pretty", 
//         artistName: 'Harriette', 
//         artwork: atLeastImPrettyArt,
//         Happy: true, 
//         Chill: true, 
//         Introspective: true}, 
//         {songName: 'Summer, Highland Falls', 
//         artistName: 'Billy Joel', 
//         artwork: summerHighlandFallsArt,
//         Energetic: true, 
//         Hopeful: true, 
//         Introspective: true}, 
//         {songName: 'Cowboy in LA', 
//         artistName: 'LANY', 
//         artwork: cowboyInLAArt,
//         Romantic: true, 
//         Chill: true, 
//         Happy: true}       
//         ] 


    const songListFiltered = SongData.filter(item => item.Happy === true) 
    const songDisplayed = songListFiltered[Math.floor(Math.random() * songListFiltered.length)] 
    return (
        <div className="song-box">
            <img src={songDisplayed.artwork} alt="album artwork" />
            <h3>{songDisplayed.songName}</h3>
            <p>{songDisplayed.artistName}</p>
        </div>
    )
}

export default Songs; 