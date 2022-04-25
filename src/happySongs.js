import React, { useState, Component } from "react";
import './App.css';
import axios from "axios";

function HappySongs(props) {

return (
    <div className="song-box">
        <iframe src={props.data} className="hyperlink"></iframe>
    </div>
)

}; 

export default HappySongs; 