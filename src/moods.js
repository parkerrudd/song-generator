import React, { useState, useEffect } from "react";
import './App.css'; 
import HappySongs from "./happySongs";
import SadSongs from "./sadSongs";
import ChillSongs from "./chillSongs";
import HopefulSongs from "./hopefulSongs";
import NostalgicSongs from './nostalgicSongs'; 
import RomanticSongs from "./romanticSongs";
// import axios from "axios";

function Moods(props) {

    const [happyIsClicked, setHappyIsClicked] = useState(false)

    const happyButtonClick = () => {
        setHappyIsClicked(true)
        if (sadIsClicked) {
            setSadIsClicked(!sadIsClicked)
        } if (chillIsClicked) {
            setChillIsClicked(!chillIsClicked)
        } if (hopefulIsClicked) {   
            setHopefulIsClicked(!hopefulIsClicked)
        } if (nostalgicIsClicked) {
            setNostalgicIsClicked(!nostalgicIsClicked)
        } if (romanticIsClicked) {
            setRomanticIsClicked(!romanticIsClicked)
        }
    }; 

    const [sadIsClicked, setSadIsClicked] = useState(false)

    const sadButtonClick = () => {
        setSadIsClicked(true)
        if (happyIsClicked) {
            setHappyIsClicked(!happyIsClicked)
        } if (chillIsClicked) {
            setChillIsClicked(!chillIsClicked)
        } if (hopefulIsClicked) {
            setHopefulIsClicked(!hopefulIsClicked)
        } if (nostalgicIsClicked) {
            setNostalgicIsClicked(!nostalgicIsClicked)
        } if (romanticIsClicked) {
            setRomanticIsClicked(!romanticIsClicked)
        }
    }; 

    const [chillIsClicked, setChillIsClicked] = useState(false)

    const chillButtonClick = () => {
        setChillIsClicked(true)
        if (happyIsClicked) {
            setHappyIsClicked(!happyIsClicked)
        } if (sadIsClicked) {
            setSadIsClicked(!sadIsClicked)
        } if (hopefulIsClicked) {
            setHopefulIsClicked(!hopefulIsClicked)
        } if (nostalgicIsClicked) {
            setNostalgicIsClicked(!nostalgicIsClicked)
        } if (romanticIsClicked) {
            setRomanticIsClicked(!romanticIsClicked)
        }

    }; 

    const [hopefulIsClicked, setHopefulIsClicked] = useState(false)

    const hopefulButtonClick = () => {
        setHopefulIsClicked(true)
        if (happyIsClicked) {
            setHappyIsClicked(!happyIsClicked)
        } if (sadIsClicked) {
            setSadIsClicked(!sadIsClicked)
        } if (chillIsClicked) {
            setChillIsClicked(!chillIsClicked)
        } if (nostalgicIsClicked) {
            setNostalgicIsClicked(!nostalgicIsClicked)
        } if (romanticIsClicked) {
            setRomanticIsClicked(!romanticIsClicked)
        }

    }; 

    const [nostalgicIsClicked, setNostalgicIsClicked] = useState(false)

    const nostalgicButtonClick = () => {
        setNostalgicIsClicked(true)
        if (happyIsClicked) {
            setHappyIsClicked(!happyIsClicked)
        } if (sadIsClicked) {
            setSadIsClicked(!sadIsClicked)
        } if (chillIsClicked) {
            setChillIsClicked(!chillIsClicked)
        } if (romanticIsClicked) {
            setRomanticIsClicked(!romanticIsClicked)
        } if (hopefulIsClicked) {
            setHopefulIsClicked(!hopefulIsClicked)
        } 

    }; 

    const [romanticIsClicked, setRomanticIsClicked] = useState(false)

    const romanticButtonClick = () => {
        setRomanticIsClicked(true)
        if (happyIsClicked) {
            setHappyIsClicked(!happyIsClicked)
        } if (sadIsClicked) {
            setSadIsClicked(!sadIsClicked)
        } if (chillIsClicked) {
            setChillIsClicked(!chillIsClicked)
        } if (hopefulIsClicked) {
            setHopefulIsClicked(!hopefulIsClicked)
        } if (nostalgicIsClicked) {
            setNostalgicIsClicked(!nostalgicIsClicked)
        } 

    }

    const NOSTALGIC_PLAYLIST = "https://api.spotify.com/v1/playlists/3iMdhBqZuA6A2OHZFRtnhb?si=1a6bc4158e65499e";
    const HAPPY_PLAYLIST = "https://api.spotify.com/v1/playlists/4S339VsAxWlerLiR3L3Uz2?si=8ae5c5ff6eca4f35"; 
    const CHILL_PLAYLIST = "https://api.spotify.com/v1/playlists/4S3UrytiOvrHyhz3jtHJvV?si=597fd7b0e6cb40ea"; 
    const ROMANTIC_PLAYLIST = "https://api.spotify.com/v1/playlists/0CnmbCvf7SI4l6yLtlH1kK?si=8b71dc5ce5454819"; 
    const SAD_PLAYLIST = "https://api.spotify.com/v1/playlists/5KEyQrelBJ8nWOHctbkQv4?si=05c8865a4474414c"; 
    const HOPEFUL_PLAYLIST = "https://api.spotify.com/v1/playlists/4ePdaQklzFSjRSbay84KnA?si=561d0058a4394a71"; 

    const [token, setToken] = useState(""); 
    const [data, setData] = useState(''); 

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken")); 
        }
    }, []); 

    const handleGetPlaylist = (PLAYLIST) => {
        let playlist, tracks, embedCode, url
        var axios = require('axios');

        var config = {
        method: 'get',
        url: PLAYLIST,
        headers: { 
            Authorization: "Bearer " + token
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
            setData(url); 
        })
        .catch(function (error) {
        console.log(error); 
        });
    }; 

    return (
        <div className="big-container">
            <div className="container">
                <div className="mood-selector">
                    <button onClick={() => {handleGetPlaylist(HAPPY_PLAYLIST); happyButtonClick(); props.updateBackground("url(/images/layered-waves-haikei.svg)"); props.addRain("")}} className={happyIsClicked ? 'clicked' : "mood-btns"}  id="happy">Happy</button>
                </div>
                <div className="mood-selector">
                    <button onClick={() => {handleGetPlaylist(SAD_PLAYLIST); sadButtonClick(); props.updateBackground("url(/images/sad-waves-haikei.svg)"); props.addRain("rain")}} className={sadIsClicked ? 'clicked' : "mood-btns"} id="sad">Sad</button>
                </div>
                <div className="mood-selector">
                    <button onClick={() => {handleGetPlaylist(CHILL_PLAYLIST); chillButtonClick(); props.updateBackground("url(/images/chill-waves-haikei.svg)"); props.addRain("") }} className={chillIsClicked ? 'clicked' : "mood-btns"}  id="chill">Chill</button>
                </div>
                <div className="mood-selector">
                    <button onClick={() => {handleGetPlaylist(HOPEFUL_PLAYLIST); hopefulButtonClick(); props.updateBackground("url(/images/hopeful-layered-waves-haikei.svg)"); props.addRain("")}} className={hopefulIsClicked ? 'clicked' : "mood-btns"}  id="hopeful">Hopeful</button>
                </div>
                <div className="mood-selector">
                    <button onClick={() => {handleGetPlaylist(NOSTALGIC_PLAYLIST); nostalgicButtonClick(); props.updateBackground("url(/images/nostalgic-blob-scene-haikei.svg)"); props.addRain("")}} className={nostalgicIsClicked ? 'clicked' : "mood-btns"} id="nostalgic">Nostalgic</button>
                </div>
                <div className="mood-selector">
                    <button onClick={() => {handleGetPlaylist(ROMANTIC_PLAYLIST); romanticButtonClick(); props.updateBackground("url(/images/romantic-steps-haikei.svg)"); props.addRain("")}} className={romanticIsClicked ? 'clicked' : "mood-btns"} id="romantic">Romantic</button>
                </div>
            </div>

            <div className="generator">
                { happyIsClicked ? <HappySongs data = {data}/> : ''}
                { sadIsClicked ? <SadSongs data = {data} /> : ''}
                { chillIsClicked ? <ChillSongs data = {data} /> : ''}
                { hopefulIsClicked ? <HopefulSongs data = {data} /> : ''}
                { nostalgicIsClicked ? <NostalgicSongs data = {data}/> : ''}
                { romanticIsClicked ? <RomanticSongs data = {data}/> : ''}
            </div>
        </div>
    )
}; 


export default Moods; 
