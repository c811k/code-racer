import React from "react";
import timeFormat from "../utils/timeFormat.js";
import "./style.css";

function Timer(props) {
    return (
        // <div className="alert text-center rounded-0">
        //     {props.hasBeenClicked === false ?
        //     <div><button onClick={props.handleCountDown} className="btn btn-lg rounded-0 pt-2 mb-2">START <i className="far fa-play-circle"></i></button><h6>Game starts in... {props.count}</h6></div> : <div>
        //     <h1 class="mt-4 mb-4">{timeFormat(props.time * 425)} seconds</h1></div>}
        // </div>
        <div className="alert text-center rounded-0">
            {props.hasBeenClicked === false ? <a className="btn btn-lg rounded-0" onClick={props.handleCountDown}>START <i className="far fa-play-circle"></i></a> : <div>{props.count}</div>}
        </div>
    );
}

export default Timer;