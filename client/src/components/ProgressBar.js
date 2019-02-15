import React from "react";

function ProgressBar(props) {
    return (
        <div className="progress mt-2 shadow">
            <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated" aria-valuemin="0" style={{ width: `${props.percentage}%` }}>{props.username ? props.username : "CODE RIDER"}<i className="fas fa-running fa-2x"></i></div>
        </div>
    );
}

export default ProgressBar;