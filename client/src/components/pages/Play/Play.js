import React, { Component } from "react";
import AceEditor from "react-ace";
import ProgressBar from "../../ProgressBar.js";
import PromptMenu from "../../promptMenu/PromptMenu";
import LeaderBoard from "../../LeaderBoard/LeaderBoard.js";
import Timer from "../../Timer/Timer.js";
import axios from "axios";
import "brace/mode/javascript";
import "brace/theme/tomorrow_night";
import 'brace/ext/language_tools';
import "./play.css";
// import Login from "../Login/Login.js";
// import LeaderBoard from "../../LeaderBoard.js";

class Play extends Component {

    state = {
        percentage: 0,
        value: "",
        topEditor: "",
        time: 0,
        username: "",
        hasBeenClicked: false,
        Users: []
    }

    componentDidMount() {
        axios.get(`/api/prompt/forLoop`)
            .then( (res) => {
            var data = res.data;

            this.setState({
                topEditor: data
            });
        });
    }

    handleLeaderboard = () => {
        axios.get("/api/users").then((response) => {
            // var scores = []
            // for (var i = 0; i < response.data.length; i++) {
            //     scores.push(response.data[i].time);
            // }
            // var scores = scores.sort(function (a, b) { return a - b });
            // console.log(scores);
            this.setState({
                Users: response.data
            });

        });
    }

    componentDidMount() {
        this.handleLeaderboard();
    }

    handlePrompt = event => {
        event.preventDefault();
        axios.get(`/api/prompt/${event.target.value}`)
            .then( (res) => {
            var data = res.data;

            this.setState({
                topEditor: data
            });
        });
    }

    checkProgress = (value) => {

        // if(value[value.length - 1] === ")" && value[value.length - 2] === "(" ) {
        //     console.log('hit');
        //     value = value.substring(0, value.length - 1);
        // }
        
        this.setState({value}, () => {
            var {value} = this.state;
            value = value.replace(/\s/g, '');
            console.log(value);

            //Create new index to align user's input with the prompt's.
            let strToMatch = this.state.topEditor.replace(/\s/g, '');
            for(let i = 0; i < value.length; i++) {
                if(strToMatch[i] === value[i]) {
                    this.setState({
                        percentage: this.state.percentage + 100/strToMatch.length
                    });
                }
                
                else {
                    this.setState({
                        percentage: this.state.percentage - 100/strToMatch.length
                    });
                    
                }


            // let characterIndex = value.length - 1,
            //     strToMatch = this.state.topEditor.replace(/\s/g, '').substr(0,characterIndex + 1);
            //     console.log(value, strToMatch);
            // if (strToMatch === value){
            //     console.log("good");
            // } else {
            //     console.log("no");
            // }
            }
        });
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
        axios.get("/api/user").then( (response) => {
            this.setState({
                username: response.username
            });
        });
    };

    handleTimer = () => {
        var timer = 0;
        if (!this.state.hasBeenClicked) {
                
            setInterval(() => {
                timer++;
                this.setState({
                    time: timer,
                    hasBeenClicked: true
                });
            }, 1);
        }
    };


    render() {

        return (
            <div className="play">
                <div className="row text-center">
                <div className="col-md-9">
                    <Timer
                        time={this.state.time}
                        handleTimer={this.handleTimer}
                    />
                    <button onClick={!this.state.hasBeenClicked && this.handleTimer} className="btn btn-light btn-sm mb-3">Start <i className="far fa-play-circle"></i></button>
                    <AceEditor 
                        mode="javascript"
                        theme="tomorrow_night"
                        value = {this.state.topEditor}
                        name="UNIQUE_ID_OF_DIV"
                        style={{width: "100%"}}
                        editorProps={{
                            $blockScrolling: true
                            
                        }}
                        setOptions={{
                            fontSize: '10pt',
                            minLines: 12,
                            maxLines: 12,
                            readOnly: true,
                            tabSize: 2
                        }} 
                    />
                    <hr className="my-3" />
                    <AceEditor 
                        mode="javascript"
                        theme="tomorrow_night"
                        onChange={this.checkProgress}
                        name="UNIQUE_ID_OF_DIV2"
                        style={{width: "100%"}}
                        value={this.state.value}
                        editorProps={{
                            $blockScrolling: true  
                        }}
                        setOptions={{
                            fontSize: '10pt',
                            minLines: 12,
                            maxLines: 12,
                            tabSize: 2,
                            behavioursEnabled: false
                        }}
                    />
                    
                </div>

                    <div className="col-md-3">
                        <div className="alert alert-light">
                            LANGUAGE: JAVASCRIPT
                    </div>
                    <PromptMenu 
                        handlePrompt={this.handlePrompt}
                    />
                    <div className="alert alert-secondary mt-5">
                        LEADERBOARD
                    </div>
                    <hr className="my-3" />
                    <ul className="list-group list-group-flush mt-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <i className="fas fa-trophy"></i>Jonathan
                            <h5><span className="badge badge-secondary">14.2</span></h5>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <i>2.</i>Clark
                            <h5><span className="badge badge-secondary">15.7</span></h5>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <i>3.</i>Patrick
                            <h5><span className="badge badge-secondary">17.3</span></h5>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <i>4.</i>Irwing
                            <h5><span className="badge badge-secondary">19.8</span></h5>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <i>5.</i>Clint
                            <h5><span className="badge badge-secondary">20.4</span></h5>
                        </li>
                    </ul>
                </div>
            </div>
            <Timer
            time={this.state.time}
            handleTimer={this.handleTimer}
            />
            <LeaderBoard
            topUser={this.userName}
            topTime={this.userName}
            />
            <div className="row mt-3">
                <div className="col-md-12">
                    <ProgressBar
                        percentage={this.state.percentage}
                    />
                </div>
            </div>
            <LeaderBoard
                key={this.state.Users.username}
                users={this.state.Users}
            />
        </div>
      
        );
    }

}

export default Play;