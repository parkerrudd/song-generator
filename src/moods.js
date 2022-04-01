import React, { useState } from "react";
import './App.css'; 
// import data from './checkedBoxes.json'; 

function Moods(props) {
    const checkedBoxes = []
    // // const addChecked = () => {
    // //     checkedBoxes.push(props.name)
    // // }
    // const [checked, setChecked] = useState(true)

    // const addChecked = () => {
    //     setChecked(!checked)
    //     if (checked === true) {
    //         checkedBoxes.push(props.name)
    //         // let json = JSON.stringify(checkedBoxes)
    //     }
    // }
    const onButtonClick = (value) => {
        checkedBoxes.push(value)
        // console.log(checkedBoxes)
    }
    localStorage.setItem('data', JSON.stringify(checkedBoxes));
    // const fs = require('fs'); 
    
    return (
        <div className="mood-selector">
            <input onClick={() => onButtonClick(props.name)} className= {props.name} type="checkbox" value ={props.name} name={props.name} id={props.name} />
            <label htmlFor={props.name} id={props.name}>{props.name}</label>
        </div>
    )
}


export default Moods; 
