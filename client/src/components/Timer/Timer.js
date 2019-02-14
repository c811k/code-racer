import React from "react";
import timeFormat from "../utils/timeFormat.js";
import "./style.css";

function Timer(props) {
    return (
        <div className="text-center alert alert-light rounded-0 bg-light">
            <h6>CLICK START TO BEGIN</h6>
            <button onClick={props.handleTimer} className="btn btn-light btn-sm mb-3"><i className="far fa-play-circle"></i>Start </button>            
            <h5 className="mb-2">{timeFormat(props.time * 425)}
            </h5>
        </div>

        // <div>
        //     <h1 id="timer">{timeFormat(props.time * 425)}</h1>
        // </div>
    );
}

export default Timer;