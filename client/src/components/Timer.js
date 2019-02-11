import React from "react";
import timeFormat from "./utils/timeFormat.js";

function Timer(props) {
    return (
        <div>
            <h1>{timeFormat(props.time * 250)}</h1>
            <button onClick={props.handleTimer}>Timer</button>
        </div>
    );
}

export default Timer;