import React from "react";

function ProgressBar(props) {
    return (
        <div className="progress rounded-0">
            <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated" aria-valuemin="0" style={{ width: `${props.percentage}%` }}> {props.username}<i className="fas fa-running fa-2x"></i></div>
        </div>
    );
}

export default ProgressBar;