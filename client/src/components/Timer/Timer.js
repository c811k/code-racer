import React from "react";
import timeFormat from "../utils/timeFormat.js";
import "./style.css";

function Timer(props) {
    return (
        <div className="text-center alert alert-light rounded-0 bg-light">
            
            
            {props.hasBeenClicked === false ? <div><h5>CLICK START TO BEGIN</h5>
            <button onClick={props.handleCountDown} className="btn btn-danger alert-danger rounded-0 mb-1">START <i className="far fa-play-circle"></i></button><h6>Game starts in... {props.count}</h6></div> : <div>
            <h1 class="mt-4 mb-4">{timeFormat(props.time * 425)} seconds</h1></div>}
            
                 
        </div>

        // <div>
        //     <h1 id="timer">{timeFormat(props.time * 425)}</h1>
        // </div>
    );
}

export default Timer;