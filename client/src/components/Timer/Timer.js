import React from "react";
import timeFormat from "../utils/timeFormat.js";
import "./style.css";

function Timer(props) {
    return (
        <div className="text-center alert alert-light border-0">
            <h6>CLICK START TO BEGIN</h6>
            <button className="btn btn-light btn-sm mb-2" onClick={props.handleTimer}>Start <i className="far fa-play-circle"></i></button>
            <h5 className="mb-2">
            {timeFormat(props.time * 250)}
            </h5>
        </div>
    );
}

export default Timer;