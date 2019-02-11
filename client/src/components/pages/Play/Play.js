import React, { Component } from "react";
import ProgressBar from "../../ProgressBar.js";
import LeaderBoard from "../../LeaderBoard.js";
import Timer from "../../Timer/Timer.js";
import Login from "../Login/Login.js";
import axios from "axios";

class Play extends Component {

    state = {
        time: 0,
        username: ""
    }

    handleLeaderboard = () => {
        axios.get("/api/users").then((response) => {
            // console.log(response.data.User.username);
            var users = response.data.sort(function(a, b){return a - b});
            console.log(users);
            
        });

    }
    
    componentDidMount() {
        this.handleLeaderboard();
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
            <LeaderBoard
            topUser={this.userName}
            topTime={this.userName}
            />
            </div>
        );
    };
    
}

export default Play;