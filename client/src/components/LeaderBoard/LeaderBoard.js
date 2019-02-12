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
                        <td>{timeFormat(props.topScore.time)}</td>
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
                    {props.allScores.map((p) => {
                        return (
                        <TableData 
                        key={p.player}
                        username={p.player}
                        time={p.time}
                        handleLeaderBoard={props.handleLeaderBoard}
                        />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default LeaderBoard;