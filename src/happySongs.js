import React from "react";
import './App.css';

function HappySongs(props) {

return (
    <div className="song-box">
        <iframe src={props.data} className="hyperlink" title="happy-song-frame"></iframe>
    </div>
)

}; 

export default HappySongs; 