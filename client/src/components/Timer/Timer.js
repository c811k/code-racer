import React from "react";
import timeFormat from "../utils/timeFormat.js";
import "./style.css";

function Timer(props) {
    return (
        <div className="alert text-center rounded-0" id="timer">
            {props.hasBeenClicked === false ?
            <div><button onClick={props.handleCountDown} className="btn rounded-0 my-1"><i className="far fa-play-circle fa-3x"></i></button></div> : <div>
            <h3 className="mt-3 mb-4">{timeFormat(props.time * 425)} seconds</h3></div>}
        </div>
    );
}

export default Timer;