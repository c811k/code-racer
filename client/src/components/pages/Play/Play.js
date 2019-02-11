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
    
    handleTimer = () => {
        var timer = 0;
        setInterval(() => {
            timer++;
            this.setState({
                time: timer
            });
        }, 1);
    }

    handleUsername = () => {
        axios.get("/api/user").then((response) => {
            this.setState({
                username: response.username
            });
        });

        if (response.username ) {

        }

    }
    
    render() {
        console.log(Login);
        return(
            <div>
            <h1>Play</h1>
            <Timer
            time={this.state.time}
            handleTimer={this.handleTimer}
            />
            <ProgressBar />
            <LeaderBoard Username={Login.inputUsername}/>
            </div>
        );
    };
    
}

export default Play;