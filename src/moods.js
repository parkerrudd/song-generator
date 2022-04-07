import React, { useState } from "react";
import './App.css'; 
import Songs from "./songs";
import SadSongs from "./sadSongs";
import ChillSongs from "./chillSongs";
import HopefulSongs from "./hopefulSongs";
import NostalgicSongs from './nostalgicSongs'; 
import RomanticSongs from "./romanticSongs";

function Moods(props) {
    //push every selected mood to this array, only allow max 3 moods to be selected, use arr in songs component to determine which to display
    let moodsArr = []

    const [happyIsClicked, setHappyIsClicked] = useState(false)
    const [songDisplay, setSongDisplay] = useState(false); 

    const happyButtonClick = () => {
        setHappyIsClicked(!happyIsClicked)
        moodsArr.push("Happy") 
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
    }
    const [sadIsClicked, setSadIsClicked] = useState(false)

    const sadButtonClick = () => {
        setSadIsClicked(!sadIsClicked)
        moodsArr.push("Sad")
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
    }

    const [chillIsClicked, setChillIsClicked] = useState(false)

    const chillButtonClick = () => {
        setChillIsClicked(!chillIsClicked)
        moodsArr.push("Chill")
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

    }

    const [hopefulIsClicked, setHopefulIsClicked] = useState(false)

    const hopefulButtonClick = () => {
        setHopefulIsClicked(!hopefulIsClicked)
        moodsArr.push("Chill")
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

    }

    const [nostalgicIsClicked, setNostalgicIsClicked] = useState(false)

    const nostalgicButtonClick = () => {
        setNostalgicIsClicked(!nostalgicIsClicked)
        moodsArr.push("Chill")
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

    }

    const [romanticIsClicked, setRomanticIsClicked] = useState(false)

    const romanticButtonClick = () => {
        setRomanticIsClicked(!romanticIsClicked)
        moodsArr.push("Chill")
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


    return (
        <div className="big-container">
            <div className="container">
                <div className="mood-selector">
                    <button onClick={() => { happyButtonClick(); props.updateBackground("url(/images/layered-waves-haikei.svg)"); props.addRain("")}} className={happyIsClicked ? 'clicked' : "mood-btns"}  id="happy">Happy</button>
                </div>
                <div className="mood-selector">
                    <button onClick={() => {sadButtonClick(); props.updateBackground("url(/images/sad-waves-haikei.svg)"); props.addRain("rain")}} className={sadIsClicked ? 'clicked' : "mood-btns"} id="sad">Sad</button>
                </div>
                <div className="mood-selector">
                    <button onClick={() => { chillButtonClick(); props.updateBackground("url(/images/chill-waves-haikei.svg)"); props.addRain("") }} className={chillIsClicked ? 'clicked' : "mood-btns"}  id="chill">Chill</button>
                </div>
                <div className="mood-selector">
                    <button onClick={() => {hopefulButtonClick(); props.updateBackground("url(/images/hopeful-layered-waves-haikei.svg)"); props.addRain("")}} className={hopefulIsClicked ? 'clicked' : "mood-btns"}  id="hopeful">Hopeful</button>
                </div>
                <div className="mood-selector">
                    <button onClick={() => {nostalgicButtonClick(); props.updateBackground("url(/images/nostalgic-blob-scene-haikei.svg)"); props.addRain("")}} className={nostalgicIsClicked ? 'clicked' : "mood-btns"} id="nostalgic">Nostalgic</button>
                </div>
                {/*<div className="mood-selector">
                    <button className="mood-btns" id="energetic">Energetic</button>
                </div>
                <div className="mood-selector">
                    <button className="mood-btns" id="introspective">Introspective</button>
                </div>}
                {/*<div className="mood-selector">
                    <button className="mood-btns" id="angry">Angry</button>
                 </div>*/}
                <div className="mood-selector">
                    <button onClick={() => {romanticButtonClick(); props.updateBackground("url(/images/romantic-steps-haikei.svg)"); props.addRain("")}} className={romanticIsClicked ? 'clicked' : "mood-btns"} id="romantic">Romantic</button>
                </div>
            </div>
           {/* <div className="btn">
                <button onClick={() => setSongDisplay(!songDisplay)}>Find Your Song</button> 
                </div>*/}

            <div className="generator">
                { happyIsClicked /* && songDisplay */ ? <Songs /> : ''}
                { sadIsClicked  /*&& songDisplay */? <SadSongs /> : ''}
                { chillIsClicked  /*&& songDisplay */? <ChillSongs /> : ''}
                { hopefulIsClicked  /*&& songDisplay */? <HopefulSongs /> : ''}
                { nostalgicIsClicked  /*&& songDisplay */? <NostalgicSongs /> : ''}
                { romanticIsClicked  /*&& songDisplay */? <RomanticSongs /> : ''}
            </div>
        </div>
    )
}


export default Moods; 
