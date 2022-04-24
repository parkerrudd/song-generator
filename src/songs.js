import React, { useState, Component } from "react";
import './App.css';
import SongData from './songData.json'; 
import axios from "axios";

class Songs extends Component {
    constructor(props) {
        super(props)
    }
    state = {
       code: null
    };

    componentDidMount() {
        let playlist, tracks, embedCode, url
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://api.spotify.com/v1/playlists/4S339VsAxWlerLiR3L3Uz2',
        headers: { 
            'Authorization': 'Bearer (token) '
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
            console.log(url)
            return url;
        })
        
        .catch(function (error) {
        console.log(error);
        });

        this.setState({
            code: url
        })
    }; 
    
    render () {    
    const { code } = this.state; 
    
    return (
        <div className="song-box">
            <h1>{code}</h1>
            <iframe className="hyperlink" src={code} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    )}
}

export default Songs; 