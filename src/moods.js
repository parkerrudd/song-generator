import React, { useState } from "react";
import './App.css'; 
import Item from "./itemAdded";
import Songs from "./songs";
import SadSongs from "./sadSongs";
import ChillSongs from "./chillSongs";

function Moods() {
    //push every selected mood to this array, only allow max 3 moods to be selected, use arr in songs component to determine which to display
    const moodsArr = []

    const [happyIsClicked, setHappyIsClicked] = useState(false)
    // const [songDisplay, setSongDisplay] = useState(false); 

    const happyButtonClick = () => {
        setHappyIsClicked(!happyIsClicked)
        moodsArr.push("happy")
        if (sadIsClicked) {
            setSadIsClicked(!sadIsClicked)
        } if (chillIsClicked) {
            setChillIsClicked(!chillIsClicked)
        }
    }
    const [sadIsClicked, setSadIsClicked] = useState(false)

    const sadButtonClick = () => {
        setSadIsClicked(!sadIsClicked)
        moodsArr.push("Sad")
        if (happyIsClicked) {
            setHappyIsClicked(!happyIsClicked)
        } if (chillIsClicked) {
            setChillIsClicked(!chillIsClicked)
        }
    }

    const [chillIsClicked, setChillIsClicked] = useState(false)

    const chillButtonClick = () => {
        setChillIsClicked(!chillIsClicked)
        moodsArr.push("Chill")
        if (happyIsClicked) {
            setHappyIsClicked(!happyIsClicked)
        } if (sadIsClicked) {
            setSadIsClicked(!sadIsClicked)
        }

    }


    return (
        <div className="big-container">
            <div className="container">
                <div className="mood-selector">
                    <button onClick={happyButtonClick} className={happyIsClicked ? 'clicked' : "mood-btns"}  id="happy">Happy</button>
                </div>
                <div className="mood-selector">
                    <button onClick={sadButtonClick} className={sadIsClicked ? 'clicked' : "mood-btns"} id="sad">Sad</button>
                </div>
                <div className="mood-selector">
                    <button onClick={chillButtonClick} className={chillIsClicked ? 'clicked' : "mood-btns"}  id="chill">Chill</button>
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
                { happyIsClicked  /*&& songDisplay */? <Songs moodsArr={moodsArr}/> : ''}
                { sadIsClicked  /*&& songDisplay */? <SadSongs /> : ''}
                { chillIsClicked  /*&& songDisplay */? <ChillSongs /> : ''}
            </div>
        </div>
    )
}


export default Moods; 
