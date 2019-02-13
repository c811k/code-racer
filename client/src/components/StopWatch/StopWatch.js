import React from "react";

class StopWatch extends React.Component {
    render(){
        return (
        <div>
            <h1>{this.props.stopwatch}</h1>
        </div>
    );}
    
}

export default StopWatch;