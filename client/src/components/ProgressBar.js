import React from "react";

function ProgressBar(props) {

    return (
        <div className="progress" style={{"height" : "15px"}}>
            <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{"width" : "32"+"%"}}></div>
        </div>
    );
}

export default ProgressBar;