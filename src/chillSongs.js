import React, { useState } from "react";
import './App.css';
import axios from 'axios'; 
import SongData from './songData.json'; 

 

function ChillSongs(props) {
let playlist, tracks, embedCode, url
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.spotify.com/v1/playlists/4S339VsAxWlerLiR3L3Uz2',
  headers: { 
    'Authorization': 'Bearer (token)'
  }
};

axios(config)
.then(function (response) {
    playlist = response.data; 
    tracks = playlist.tracks.items
    const songRandom = tracks[Math.floor(Math.random() * tracks.length)] 
    const songDisplayed = songRandom.track.external_urls.spotify; 
    embedCode = songDisplayed.slice(31, 53)
    url = "https://open.spotify.com/embed/track/" + embedCode + "?utm_source=generator"
    return url; 
})
.catch(function (error) {
  console.log(error); 
});
    const {code, setCode} = useState(url)
    // const songListFiltered = SongData.filter(item => item.Chill === true)

    return (
        <div className="song-box">
        
        <iframe className="hyperlink" src={code} allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
         {/*<iframe className="hyperlink" src="https://open.spotify.com/track/5iDcBu1OOvRj3d494IIkUH" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <iframe src={songDisplayed.hyperlink} className="hyperlink"></iframe>
            <h3>{songDisplayed.songName}</h3>
            <p>{songDisplayed.artistName}</p>*/}
        </div>
    )
}

export default ChillSongs; 