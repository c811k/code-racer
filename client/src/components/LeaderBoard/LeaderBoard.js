import React from "react";
import "./LeaderBoard.css"

function LeaderBoard(props) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.username}
            <h5><span className="badge badge-secondary">{props.time}</span></h5>
        </li>
    );
}

export default LeaderBoard;