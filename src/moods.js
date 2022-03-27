import React from "react";
import './App.css';

function Moods(props) {
    return (
        <div className="mood-selector">
            <input type="checkbox" name={props.name} id={props.name} />
            <label htmlFor={props.name} id={props.name}>{props.name}</label>
        </div>
    )
}

export default Moods; 