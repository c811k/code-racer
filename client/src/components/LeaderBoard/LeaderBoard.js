import React from "react";
import TableData from "./TableData.js"

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
                <tbody>
                    <tr>
                        <th>Username</th>
                        <th>Fastest Time</th>
                    </tr>
                    {props.users.map((p) => {
                        return (
                        <TableData 
                        key={p.username}
                        username={p.username}
                        time={p.time}
                        />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default LeaderBoard;