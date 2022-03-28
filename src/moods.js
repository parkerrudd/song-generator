import React from "react";
import './App.css';

function Moods(props) {

    return (
        <div className="mood-selector">
            <input className= 'moodCheckboxes' type="checkbox" value ={props.name} name={props.name} id={props.name} />
            <label htmlFor={props.name} id={props.name}>{props.name}</label>
        </div>
    )
}


export default Moods; 