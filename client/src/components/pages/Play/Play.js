import React, { Component } from "react";
import AceEditor from "react-ace";
import ProgressBar from "../../ProgressBar.js";
// import LeaderBoard from "../../LeaderBoard.js";
import Timer from "../../Timer/Timer.js";
// import Login from "../Login/Login.js";
import axios from "axios";
import "brace/mode/javascript";
import "brace/theme/tomorrow_night";
import 'brace/ext/language_tools';


import "./play.css";


class Play extends Component {

    state = {
        percentage: 0,
        value: "",
        topEditor: 
        `for (let i = 0; i< array.length; i++) {
    console.log(i)
}`,
        time: 0,
        username: ""
    }

    componentDidMount() {
    }

    checkProgress = (value, event) => {

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
            }
            console.log(value, strToMatch);

            // let characterIndex = value.length - 1,
            //     strToMatch = this.state.topEditor.replace(/\s/g, '').substr(0,characterIndex + 1);
            //     console.log(value, strToMatch);
            // if (strToMatch === value){
            //     console.log("good");
            // } else {
            //     console.log("no");
            // }
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
    }

    render() {
        return(
            <div className="play">
            <div className="row text-center">
                <div className="col-md-9">
                    <Timer
                        time={this.state.time}
                        handleTimer={this.handleTimer}
                    />
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
                            minLines: 10,
                            maxLines: 10,
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
                            minLines: 10,
                            maxLines: 10,
                            tabSize: 2,
                            behavioursEnabled: false
                        }}
                    />
                    <ProgressBar
                            percentage={this.state.percentage}    
                    />
                </div>

                <div className="col-md-3">
                    <div className="alert alert-light">
                        LANGUAGE: JAVASCRIPT
                    </div>
                    <div className="alert alert-info" id="prompt">
                        FOR LOOP
                    </div>
                    <div className="alert alert-secondary mt-5">
                        LEADERBOARD
                    </div>
                    <ul className="list-group list-group-flush">
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
            
            {/* <LeaderBoard Username={Login.inputUsername}/> */}
            </div>
        );
    }
}

export default Play;