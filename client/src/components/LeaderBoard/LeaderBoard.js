import React from "react";
import "./LeaderBoard.css"
import TableData from "./TableData.js"
import timeFormat from "../utils/timeFormat.js";

function LeaderBoard(props) {
    return (
        <div className="topPlayer" >
            <h2>Top Player</h2>
            <table style={{ "width": "75%" }}>
                <tbody>
                    <tr>
                        <th>Username</th>
                        <th>Fastest Time</th>
                    </tr>
                    <tr>
                        <td>{props.topScore.player}</td>
                        <td>{props.topScore.time}</td>
                    </tr>
                </tbody>
            </table>

            <br></br>

            <h2>Leader Board</h2>
            <table style={{ "width": "75%" }}>
                <tbody>
                    <tr>
                        <th>Username</th>
                        <th>Fastest Time</th>
                    </tr>
                    <tr>
                        <td>{props.username}</td>
                        <td>{props.time}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LeaderBoard;