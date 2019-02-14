import React from "react";

function TopPlayer (props) {
    return (
        <div>
            <div className="alert alert-secondary rounded-top mt-4">TOP PLAYER</div>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <i className="fas fa-trophy"></i>{props.username}
                <h5><span className="badge badge-secondary">{props.time}</span></h5>
            </li>
        </div>
    );
}

export default TopPlayer;