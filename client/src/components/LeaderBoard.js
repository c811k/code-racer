import React from "react";

function LeaderBoard(props) {
    return (
        <div>
            <h2>Top Player</h2>
            <table style={{ "width": "100%" }}>
                <tbody>
                    <tr>
                        <th>Username</th>
                        <th>Fastest Time</th>
                    </tr>
                    <tr>
                        <td>{props.topName}</td>
                        <td>{props.topTime}</td>
                    </tr>
                </tbody>
            </table>

            <br></br>

            <h2>Leader Board</h2>
            <table style={{ "width": "100%" }}>
                <tbody>
                    <tr>
                        <th>Username</th>
                        <th>Fastest Time</th>
                    </tr>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.time}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LeaderBoard;