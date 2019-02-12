import React from "react";
import timeFormat from "./utils/timeFormat.js"

function LeaderBoard(props) {

    return (
        <div>
            <h2>Top Player</h2>
            <table style={{ "width": "75%" }}>
                <tbody>
                    <tr>
                        <th>Username</th>
                        <th>Fastest Time</th>
                    </tr>
                    <tr>
                        <td>{props.topUser}</td>
                        <td>{props.topTime}</td>
                    </tr>
                </tbody>
            </table>

            <br></br>

            <h2>Leader Board</h2>
            <table style={{ "width": "75%" }}>
                {props.users.map((p) => {

                    
    
                    return (
                        <tbody>
                            <tr>
                                <th>Username</th>
                                <th>Fastest Time</th>
                            </tr>
                            <tr>
                                <td>{p.username}</td>
                                <td>{timeFormat(p.time)}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}

export default LeaderBoard;