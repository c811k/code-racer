import React, { Component } from "react";
import AceEditor from "react-ace";
import ProgressBar from "../../ProgressBar.js";
import LeaderBoard from "../../LeaderBoard.js";
import Timer from "../../Timer/Timer.js";
import Login from "../Login/Login.js";
import axios from "axios";
import "brace/mode/javascript";
import "brace/theme/tomorrow_night";

import "./play.css";


class Play extends Component {

    state = {
        percentage: 0,
        value: "",
        topEditor: "for (let i = 0; i< array.length; i++) {",
        time: 0,
        username: "",
        hasBeenClicked: false,
        Users: []

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

    checkProgress = (value, event) => {
        if (value[value.length - 1] === ")" && value[value.length - 2] === "(") {
            console.log('hit')
            value = value.substring(0, value.length - 1);
        }
        this.setState({ value }, () => {
            const { value } = this.state;
            console.log(value)
            //Create new index to align user's input with the prompt's.
            let characterIndex = value.length - 1,
                strToMatch = this.state.topEditor.substr(0, characterIndex + 1);

            console.log(value, strToMatch);

            if (strToMatch === value) {
                console.log("good");
            } else {
                console.log("no");
            }
        })

    }

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
    }

    render() {

        return (
            <div className="play">
                <div className="row text-center">
                    <div className="col-md-9">
                        <div className="timer-div">
                            <Timer
                                time={this.state.time}
                            />
                        </div>
                        <button onClick={!this.state.hasBeenClicked && this.handleTimer} className="btn btn-light btn-sm mb-3">Start <i className="far fa-play-circle"></i></button>
                        <AceEditor
                            mode="javascript"
                            theme="tomorrow_night"
                            defaultValue={this.state.topEditor}
                            value={this.state.topEditor}
                            // onChange={this.onChange}
                            name="UNIQUE_ID_OF_DIV"
                            style={{ width: "100%" }}
                            editorProps={{
                                $blockScrolling: true
                            }}
                            readOnly={true}
                            setOptions={{
                                fontSize: '10pt',
                                minLines: 10,
                                maxLines: 10,
                                readOnly: true,
                                tabSize: 2
                            }}
                        />
                        <hr className="my-3" />
                        <div className="progress mt-2">
                            <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated shadow" aria-valuemin="0" style={{ width: `${this.state.percentage}%` }}>Jonathan<i className="fas fa-running fa-2x"></i></div>
                        </div>
                        <hr className="my-3" />
                        <AceEditor
                            mode="javascript"
                            theme="tomorrow_night"
                            onChange={this.checkProgress}
                            name="UNIQUE_ID_OF_DIV2"
                            style={{ width: "100%" }}
                            value={this.state.value}
                            editorProps={{
                                $blockScrolling: true,

                            }}
                            setOptions={{
                                fontSize: '10pt',
                                minLines: 10,
                                maxLines: 10,
                                tabSize: 2,
                                enableBasicAutocompletion: false

                            }}
                        />

                    </div>

                    <div className="col-md-3">
                        <div className="alert alert-light">
                            LANGUAGE: JAVASCRIPT
                    </div>
                        <div className="alert alert-info" id="prompt">
                            FOR LOOP
                    </div>
                        <LeaderBoard
                            users={this.state.Users}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Play;