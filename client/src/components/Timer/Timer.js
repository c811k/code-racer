import React from "react";
import timeFormat from "../utils/timeFormat.js";
import "./style.css";

function Timer(props) {
    console.log(timeFormat(props.time));
    return (
        <div>
            <h1 id="timer">{timeFormat(props.time * 425)}</h1>
        </div>
    );
}

export default Timer;