import React, { Component } from "react";
import AceEditor from "react-ace";
import ProgressBar from "../../ProgressBar.js";
import PromptMenu from "../../promptMenu/PromptMenu";
import LeaderBoard from "../../LeaderBoard/LeaderBoard.js";
import Timer from "../../Timer/Timer.js";
import StartButton from "../../StartButton/StartButton.js";
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
        username: "",
        count: 5,
        running: false,
        Users: []
    }

    handleStart = (event)=> {
        event.preventDefault();
        console.log('hit');
       
        this.timer = setInterval(() => {
          const newCount = this.state.count - 1;
          this.setState(
            {count: newCount >= 0 ? newCount : 0}
          );
        }, 1000);
      }

    handleLeaderboard = () => {
        axios.get("/api/users").then((response) => {
            // var scores = []
            // for (var i = 0; i < response.data.length; i++) {
            //     scores.push(response.data[i].time);
            // }
            // var scores = scores.sort(function (a, b) { return a - b });
            // console.log(scores);
            //console.log(response.data);
            this.setState({
                Users: response.data
            });
        });
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
    }        
    checkProgress = (value) => {

        this.setState({value}, () => {

            //remove whitespaces from the keypress
            var {value} = this.state;
            value = value.replace(/\s/g, '');
           
            // removes whitespace from prompt, this is target string that user wants to match.
            let strToMatch = this.state.topEditor.replace(/\s/g, '');
            
            //keep track of where user is when typing the prompt
            var currentIndex = 0;

            for(let i = 0; i < value.length; i++) {
                
                // if what user types matches prompt, increase the index.
                if(strToMatch[i] === value[i]) {
                    currentIndex = ++currentIndex;
                }
                
                // stop increasing index if it doesn't match
                else {
                    return this.state.currentIndex;    
                } 
            }
            // increases progress bar according to the index defined above.
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

    render() {
        return (
            <div className="play">
                <div className="row text-center">
                    <div className="col-md-9">
                        <Timer count={this.state.count}></Timer>
                        <StartButton onClickHandler={this.handleStart.bind(this)}></StartButton>
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
                <div className="row mt-3">
                    <div className="col-md-12">
                    </div>
                </div>
            </div>

        );
    }

}

export default Play;