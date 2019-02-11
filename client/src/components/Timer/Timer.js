import React from "react";
import timeFormat from "../utils/timeFormat.js";
import "./style.css";

function Timer(props) {
    return (
        <div>
            <h1 id="timer">{timeFormat(props.time * 250)}</h1>
            <button onClick={props.handleTimer}>Timer</button>
        </div>
    );
}

export default Timer;