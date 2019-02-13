import React from "react";
//import timeFormat from "../utils/timeFormat.js";
import "./style.css";

class Timer extends React.Component {
    render(){
        return (
        <div>
            <h1>{this.props.count}</h1>
        </div>
        );
    }
    
}

export default Timer;