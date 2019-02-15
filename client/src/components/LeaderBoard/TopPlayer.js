import React from "react";
import "./LeaderBoard.css";
function TopPlayer (props) {
    return (
        <div>
            <div className="alert alert-secondary rounded-top mt-5 shadow" id="title">TOP PLAYER</div>
            <li className="list-group-item d-flex justify-content-between align-items-center shadow">
                <i className="fas fa-trophy"></i>{props.username}
                <h5><span className="badge badge-secondary">{props.time}</span></h5>
            </li>
        </div>
    );
}

export default TopPlayer;