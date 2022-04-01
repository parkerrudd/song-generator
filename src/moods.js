import React, { useState } from "react";
import './App.css'; 
import Item from "./itemAdded";
import Songs from "./songs";

function Moods() {

    const [isClicked, setIsClicked] = useState(false)
    const [songDisplay, setSongDisplay] = useState(false); 

    const buttonClick = () => {
        setIsClicked(!isClicked)
    }


    return (
        <div className="big-container">
            <div className="container">
                <div className="mood-selector">
                    <button onClick={buttonClick} className={isClicked ? 'clicked' : "mood-btns"}  id="happy">Happy</button>
                </div>
                <div className="mood-selector">
                    <button className="mood-btns" id="sad">Sad</button>
                </div>
                <div className="mood-selector">
                    <button className="mood-btns" id="chill">Chill</button>
                </div>
                <div className="mood-selector">
                    <button className="mood-btns" id="hopeful">Hopeful</button>
                </div>
                <div className="mood-selector">
                    <button className="mood-btns" id="nostalgic">Nostalgic</button>
                </div>
                <div className="mood-selector">
                    <button className="mood-btns" id="energetic">Energetic</button>
                </div>
                <div className="mood-selector">
                    <button className="mood-btns" id="introspective">Introspective</button>
                </div>
                <div className="mood-selector">
                    <button className="mood-btns" id="angry">Angry</button>
                </div>
                <div className="mood-selector">
                    <button className="mood-btns" id="romantic">Romantic</button>
                </div>
            </div>
            <div className="btn">
               { /* <button onClick={() => setSongDisplay(!songDisplay)}>Find Your Song</button> */}
            </div>
            
    {/* isClicked ? <Item /> : '' */}

            <div className="generator">
                { isClicked  /*&& songDisplay */? <Songs /> : ''}
            </div>
        </div>
    )
}


export default Moods; 
