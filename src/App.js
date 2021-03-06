import React, { useEffect, useState } from 'react';
import './App.css';
import Moods from './moods';

const CLIENT_ID = "fc084ca6b2d441beac484e68d5bdcf53";
const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "http://localhost:3000/";
const SPACE_DELIMITER = "%20";
const SCOPES = ["playlist-read-public", "user-read-currently-playing", "user-read-playback-state"];
const SCOPES_URL_PARAMS = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotify = (hash) => {
  const stringAfterHash = hash.substring(1);
  const paramsInUrl = stringAfterHash.split('&');
  const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulator[key] = value;
    console.log(accumulator)
    return accumulator;
  }, {});

  return paramsSplitUp;
}; 


function App() {

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getReturnedParamsFromSpotify(window.location.hash);

      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });

  useEffect(() => {
    if (window.location.href.indexOf('access_token') > -1) {
      setLogin("btn-hide"); 
    }
  }, []); 


  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;
  }

  const [background, setBackground] = useState("url(/images/layered-waves-haikei.svg)"); 
  const [bgRain, setbgRain] = useState(""); 
  const [login, setLogin] = useState("");

  return (
    <div className={bgRain}>
      <div className="App" style={{ backgroundImage: background }}>
       <button className={login} id="spotify-btn" onClick={handleLogin}>Connect With Spotify</button>

       {window.location.href.indexOf('access_token') > -1 ?  <h1 id='header'>How Are You Feeling? </h1> : null } 
        <div className="mood-selectors-container">
          <div className="mood-selectors">
            {
              window.location.href.indexOf('access_token') > -1 ?
               <Moods updateBackground={background => setBackground(background)} addRain={bgRain => setbgRain(bgRain)} /> 
            : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
