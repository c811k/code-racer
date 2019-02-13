import React from "react";
import timeFormat from "../utils/timeFormat.js";

function TableData(props) {
    return (
        <tr>
            <td>{props.username}</td>
            <td>{timeFormat(props.time)}</td>
        </tr>
    );

}

export default TableData;