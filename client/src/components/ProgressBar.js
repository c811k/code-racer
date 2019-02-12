import React from "react";

function ProgressBar(props) {
    return (
        <div className="progress mt-2">
            <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated shadow" aria-valuemin="0" style={{ width: `${props.percentage}%` }}>{props.username ? props.username : "coderider"}<i className="fas fa-running fa-2x"></i></div>
        </div>
    );
}

export default ProgressBar;