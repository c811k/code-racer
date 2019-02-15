import React, { Component } from "react";
import AceEditor from "react-ace";
import ProgressBar from "../../ProgressBar";
import PromptMenu from "../../promptMenu/PromptMenu";
import LeaderBoard from "../../LeaderBoard/LeaderBoard";
import TopPlayer from "../../LeaderBoard/TopPlayer";
import Timer from "../../Timer/Timer";
import Footer from "../../Footer/Footer";
import timeFormat from "../../utils/timeFormat.js";
import axios from "axios";
import Example from "../Modal/Modal";
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
        userData: [],
        count: 3,
        id: "",
        finished: false
    }

    componentDidMount = () => {
        this.handleCurrentUser();
        this.getUserData(()=> {
            this.displayLeaderboard();
            this.displayTopPlayer();
        });
        axios.get(`/api/prompt/forLoop`).then((res) => {
            var data = res.data;

            this.setState({
                topEditor: data
            });
        });
    };

    getUserData = (cb) => {
        axios.get("/api/users").then(res => {
            if(res.data.length > 0) {
                this.setState({
                    userData: res.data,
                    topScore: {
                        player: res.data[0].username,
                        time: res.data[0].time
                    }
                });
            }
        }, cb);
    };

    handleCurrentUser = () => {
        axios.get("/api/profile").then(res => {
            this.setState({
                username: res.data.username,
            });
        });
    };

    displayLeaderboard = () => {
        return (
            <div>
                <div className="alert alert-secondary rounded-top mt-5 shadow">
                    LEADERBOARD
                </div>
                <hr className="my-3" />
                <ul className="list-group list-group-flush mt-2">
                    {this.state.userData.map(p => {
                            return (
                                <LeaderBoard 
                                key={p._id}
                                username={p.username}
                                time={p.time}
                                topScore={this.state.topScore}
                                />
                            );
                    })}
                </ul>
            </div>
        );
    };

    handleCountDown = () => {
        this.setState({time: 0});
        this.resetGame(() => {
            var countdown = setInterval(() => {
                this.setState({
                    count: this.state.count - 1
                }, () => {
                    if (this.state.count === 0 && !this.state.hasBeenClicked) {
                        clearInterval(countdown);
                        this.handleTimer();
                    }
                });
        }, 1000);
       });  
    };

    displayTopPlayer = () => {
        return(
            <div>
                <TopPlayer 
                username={this.state.topScore.player}
                time={this.state.topScore.time}
                />
            </div>
        );
    }; 

    handlePrompt = event => {
        event.preventDefault();
        axios.get(`/api/prompt/${event.target.value}`).then(res => {
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
            this.setState({ 
                percentage: 100 / (strToMatch.length) * currentIndex }, () => {
                if (this.state.percentage === 100) {
                    this.setState({finished: true}, () => {
                        this.setState({
                            finished: false
                        });
                    });
                }
            });
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
                    this.resetGame();
                    this.handlePost();
                    
                }
            }, 1);
        }
    };

    handlePost = () => {
        if(this.state.username !=="coderider") {
            axios.get("/api/users/" + this.state.username).then(res => {
                if(!(res.data[0].time)) {
                    axios.put("/api/user/" + this.state.username + "/" + timeFormat(this.state.time * 425));
                } else if(timeFormat(this.state.time * 425) < res.data[0].time) {
                    axios.put("/api/user/" + this.state.username + "/" + timeFormat(this.state.time * 425));
                } else {
                    console.log("Keep Practicing!");
                }
                this.getUserData(()=> {
                    this.displayLeaderboard();
                    this.displayTopPlayer();
                });
            });
        }
    };

    resetGame = (cb) =>{
        this.setState({
            stopwatch: 0,
            value: "",
            percentage: 0,
            count: 3,
            hasBeenClicked: false,
            finished: false
        }, cb);
    }

    render() {
        return (
            <div>
                <div className="play">
                    <div className="row text-center">
                        <div className="col-md-9">

                            {/* Modal */}
                            <Example 
                                finished={this.state.finished} userTime={this.state.time}
                            />

                            <Timer
                                time={this.state.time}
                                handleCountDown={this.handleCountDown}
                                count={this.state.count}
                                hasBeenClicked={this.state.hasBeenClicked}
                            />
                            
                            <AceEditor
                                mode="javascript"
                                theme="tomorrow_night"
                                value={this.state.topEditor}
                                name="UNIQUE_ID_OF_DIV"
                                style={{ width: "100%" }}
                                readOnly={true}
                                highlightActiveLine={false}
                                editorProps={{
                                    $blockScrolling: true
                                }}
                                setOptions={{
                                    fontSize: '10pt',
                                    minLines: 12,
                                    maxLines: 12,
                                    tabSize: 2,
                                }}
                            />

                            <hr className="my-3" />
                            <ProgressBar
                                percentage={this.state.percentage}
                                username={this.state.username}
                            />
                            <hr className="my-3" />
                            
                            <AceEditor
                                handleInput
                                mode="javascript"
                                theme="tomorrow_night"
                                onChange={this.checkProgress}
                                name="UNIQUE_ID_OF_DIV2"
                                style={{ width: "100%" }}
                                value={this.state.value}
                                readOnly={this.state.hasBeenClicked === false ? true : false}
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

                        <div className="col-md-3" id="scoreboard">
                            <div className="alert alert-secondary shadow" id="language">
                                LANGUAGE: JAVASCRIPT
                            </div>
                            <PromptMenu
                                handlePrompt={this.handlePrompt}
                            />
                            {this.displayTopPlayer()}
                            {this.displayLeaderboard()}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Play;