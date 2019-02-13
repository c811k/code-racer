import React, { Component } from "react";
import AceEditor from "react-ace";
import ProgressBar from "../../ProgressBar";
import PromptMenu from "../../promptMenu/PromptMenu";
import LeaderBoard from "../../LeaderBoard/LeaderBoard";
import Timer from "../../Timer/Timer";
import axios from "axios";
import "brace/mode/javascript";
import "brace/theme/tomorrow_night";
import 'brace/ext/language_tools';
import "./play.css";

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
        this.handleLeaderboard();
        axios.get(`/api/prompt/forLoop`)
            .then((res) => {
                var data = res.data;

                this.setState({
                    topEditor: data
                });
            });
    };

    handleLeaderboard = () => {
        axios.get("/api/users").then((response) => {
            // var scores = []
            // for (var i = 0; i < response.data.length; i++) {
            //     scores.push(response.data[i].time);
            // }
            // var scores = scores.sort(function (a, b) { return a - b });
            // console.log(scores);
            console.log(response.data);
            this.setState({
                Users: response.data
            });
        });
    };

    handlePrompt = event => {
        event.preventDefault();
        axios.get(`/api/prompt/${event.target.value}`)
            .then((res) => {
                var data = res.data;

                this.setState({
                    topEditor: data
                });
        });
    };      

    checkProgress = value => {

        this.setState({value}, () => {

            // Value of the keypress, with RegEx that removes whitespaces globally.
            var {value} = this.state;
            value = value.replace(/\s/g, '');
           
            let strToMatch = this.state.topEditor.replace(/\s/g, '');
            var currentIndex = 0;

            for(let i = 0; i < value.length; i++) {
               
                if(strToMatch[i] === value[i]) {
                    currentIndex = ++currentIndex;
                }
                else {
                    return this.state.currentIndex;    
                } 
            }
            this.setState({percentage: 100/(strToMatch.length) * currentIndex});
        });
    };

    handleUsername = () => {
        axios.get("/api/user").then((response) => {
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
                            value={this.state.topEditor}
                            name="UNIQUE_ID_OF_DIV"
                            style={{ width: "100%" }}
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
                        <ProgressBar
                            percentage={this.state.percentage}
                        />
                        <hr className="my-3" />

                        <AceEditor
                            mode="javascript"
                            theme="tomorrow_night"
                            onChange={this.checkProgress}
                            name="UNIQUE_ID_OF_DIV2"
                            style={{ width: "100%" }}
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
                    
                    <LeaderBoard
                    key={this.state.Users.username}
                    users={this.state.Users}
                    />
                    </div>
                </div>
            </div>
        );
    }
}

export default Play;