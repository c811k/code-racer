import React from "react";
import "./LeaderBoard.css"

function LeaderBoard(props) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center border-bottom">
            {props.username}
            <h5><span className="badge">{props.time}</span></h5>
        </li>
    );
}

export default LeaderBoard;