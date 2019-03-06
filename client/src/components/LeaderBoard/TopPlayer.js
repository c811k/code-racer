import React from "react";
import "./LeaderBoard.css";
function TopPlayer (props) {
    return (
        <div>
            <div className="alert alert-secondary rounded-top border-0 mt-5" id="title">TOP PLAYER</div>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                <i className="fas fa-trophy"></i>{props.username}
                <h5><span className="badge">{props.time}</span></h5>
            </li>
        </div>
    );
}

export default TopPlayer;