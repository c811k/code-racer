import React, { Component } from "react";
import AceEditor from "react-ace";
import ProgressBar from "../../ProgressBar";
import PromptMenu from "../../promptMenu/PromptMenu";
import LeaderBoard from "../../LeaderBoard/LeaderBoard";
import Timer from "../../Timer/Timer";
import axios from "axios";
import timeFormat from "../../utils/timeFormat";
import Modal from "../Modal/Modal";
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
        topScore: {
            player: "",
            time: 0
        },
        allScores: [],
        Users: [],
        count: 3
    }

    componentDidMount = () => {
        axios.get(`/api/prompt/forLoop`)
        .then((res) => {
            var data = res.data;

            this.setState({
                topEditor: data
            });
        });
    };


    handleLeaderboard = (cb) => {

            this.getScores(scores => {
                var orderedScores = [];
                for (let i = 0; i < scores.length; i++) {
                    axios.get("/api/users/" + scores[i]).then((response) => {
                        orderedScores.push({
                            player: response.data[0].username,
                            time: scores[i]
                        });
                    });
                }
                this.setState({
                    allScores: orderedScores
                }, cb);
            });

    }

    handleCountDown = () => {
        var countdown = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            });
            console.log(this.state.count);
        if (this.state.count === 0 && this.state.hasBeenClicked === false) {
            console.log("passed");
            clearInterval(countdown);
            this.handleTimer();
        }
    }, 1000);
    }

    getScores = (cb) => {
        var scores = [];
        axios.get("/api/users").then((response) => {
            for (var i = 0; i < response.data.length; i++) {
                scores.push(response.data[i].time);
            }
            cb(scores.sort(function (a, b) { return a - b }))
        });
    }

    handleTopPlayer = (cb) => {
        this.getScores(scores => {
            axios.get("/api/users/" + scores[0]).then((response) => {
                this.setState({
                    topScore: {
                        player: response.data[0].username,
                        time: scores[0]
                    }
                }, cb);
            });
        });
    } 

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

        this.setState({ value }, () => {

            // Value of the keypress, with RegEx that removes whitespaces globally.
            var { value } = this.state;
            value = value.replace(/\s/g, '');

            let strToMatch = this.state.topEditor.replace(/\s/g, '');
            var currentIndex = 0;

            for (let i = 0; i < value.length; i++) {

                if (strToMatch[i] === value[i]) {
                    currentIndex = ++currentIndex;
                }
                else {
                    return this.state.currentIndex;
                }
            }
            this.setState({ percentage: 100 / (strToMatch.length) * currentIndex });
        });
    };

    handleTimer = () => {
        var timer = 0;
        if (!this.state.hasBeenClicked) {

            var Timer = setInterval(() => {
                timer++;
                this.setState({
                    time: timer,
                    hasBeenClicked: true
                });
                if (this.state.percentage === 100) {
                    clearInterval(Timer);
                    console.log(this.state.time);
                    this.handlePost();
                }
            }, 1);
        }
    };

    resetGame = () =>{

        this.setState({stopwatch: 0});
        this.setState({value: ""});
        this.setState({percentage: 0});
    }

    handlePost = () => {

            axios.post("/api/user", {
                time: this.state.time*425,
                username: this.state.username,
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
            this.resetGame();

    }

    render() {
        return (
            <div className="play">
                <div className="row text-center">
                    <div className="col-md-9">
                        {this.state.count > 0 ? 
                        (<h1 id="countdown">{this.state.count}</h1>) : (
                        <Timer
                            time={this.state.time}
                            handleTimer={this.handleTimer}
                        />
                        )}
                        <button onClick={this.handleCountDown} className="btn btn-light btn-sm mb-3">Start <i className="far fa-play-circle"></i></button>

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
                            topScore={this.state.topScore}
                            allScores={this.state.allScores}
                        />

                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                    </div>
                </div>
            </div>
        );
    }
}



export default Play;