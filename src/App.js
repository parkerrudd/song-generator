import React, { useEffect, useState } from 'react';
import './App.css';
import Moods from './moods';

const CLIENT_ID = "fc084ca6b2d441beac484e68d5bdcf53";
const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "http://www.findmeasong.com/";
const SPACE_DELIMITER = "%20";
const SCOPES = ["playlist-read-public", "user-read-currently-playing", "user-read-playback-state"];
const SCOPES_URL_PARAMS = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotify = (hash) => {
  const stringAfterHash = hash.substring(1);
  const paramsInUrl = stringAfterHash.split('&');
  const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulator[key] = value;
    return accumulator;
  }, {});

  return paramsSplitUp;
}


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


  // const [login, setLogin] = useState(true);

  const handleLogin = () => {
    // setLogin(false);
    window.location = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;
  }

  const [background, setBackground] = useState("url(/images/layered-waves-haikei.svg)")
  const [bgRain, setbgRain] = useState("")

  return (
    <div className={bgRain}>
      <div className="App" style={{ backgroundImage: background }}>
      {localStorage.getItem("accessToken") ? <button onClick={handleLogin}>Connect With Spotify</button>: null}

        <h1 id='header'>How Are You Feeling?</h1>
        <div className="mood-selectors-container">
          <div className="mood-selectors">
            <Moods updateBackground={background => setBackground(background)} addRain={bgRain => setbgRain(bgRain)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
