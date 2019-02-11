import React, { Component } from "react";
import ProgressBar from "../../ProgressBar.js";
import LeaderBoard from "../../LeaderBoard.js";
import Timer from "../../Timer/Timer.js";

class Play extends Component {

    state = {
        time: 0
    }
    
    handleTimer = () => {
        var timer = 0;
        setInterval(() => {
            timer++;
            this.setState({
                time: timer
            });
        }, 1);
    }
    
    render() {
        return(
            <div>
            <h1>Play</h1>
            <Timer
            time={this.state.time}
            handleTimer={this.handleTimer}
            />
            <ProgressBar />
            <LeaderBoard />
            </div>
        );
    };
    
}

export default Play;