import React from "react";
import TableData from "./TableData.js"
import timeFormat from "../utils/timeFormat.js";

function LeaderBoard(props) {
    return (
        <div>
            <div className="alert alert-secondary rounded-top mt-5">
                LEADERBOARD
            </div>
            <hr className="my-3" />
            <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <i className="fas fa-trophy"></i>Jonathan
                    <h5><span className="badge badge-secondary">14.2</span></h5>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <i>2.</i>Clark
                    <h5><span className="badge badge-secondary">15.7</span></h5>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <i>3.</i>Patrick
                    <h5><span className="badge badge-secondary">17.3</span></h5>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <i>4.</i>Irwing
                    <h5><span className="badge badge-secondary">19.8</span></h5>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <i>5.</i>Clint
                    <h5><span className="badge badge-secondary">20.4</span></h5>
                </li>
            </ul>
            <hr className="my-3" />

            <div className="alert alert-warning rounded-top mt-4">
                HAVE FUN CODING!
            </div>
            <hr className="my-3" />
        </div>
    );
}

export default LeaderBoard;