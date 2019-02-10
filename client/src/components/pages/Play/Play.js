import React, { Component } from "react";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/tomorrow_night";

import "./play.css";
var str = "Proident esse mollit ex id eiusmod enim. Adipisicing ad eiusmod dolore cupidatat adipisicing officia non. Excepteur proident est consequat pariatur est aute non exercitation consequat esse id eiusmod. Amet commodo culpa commodo elit exercitation. Sunt ipsum dolor ipsum commodo aliquip ad ullamco velit eu nulla enim nulla cillum duis.";
console.log(str.length);

class Play extends Component {
    state = {
        percentage: 0
    }

    handleProgressBar = (event) => {
        if(str.includes(event.key)) {
            this.setState({
                percentage: this.state.percentage + 5
          });  
        }
        else {
            this.setState({
                percentage: this.state.percentage - 5
          });  
        }
    };
    
    render() {
        console.log(this.state.percentage);
        return(
            <div className="play">
            <div className="row text-center">
                <div className="col-md-9">
                    <h5>CLICK START TO BEGIN</h5><button className="btn btn-light btn-sm mb-3">Start <i className="far fa-play-circle"></i></button>
                    <AceEditor 
                        mode="javascript"
                        theme="tomorrow_night"
                        onChange={this.onChange}
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
                        onChange={this.onChange}
                        name="UNIQUE_ID_OF_DIV"
                        style={{width: "100%"}}
                        editorProps={{
                            $blockScrolling: true,
                            enableLiveAutocompletion: true
                        }}
                        setOptions={{
                            fontSize: '10pt',
                            minLines: 10,
                            maxLines: 10,
                            tabSize: 2
                        }}
                    />
                    <div className="progress mt-2">
                        <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated shadow" aria-valuemin="0" style={{ width: `${this.state.percentage}%` }}>Jonathan<i className="fas fa-running fa-2x"></i></div>
                    </div>
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
            </div>
        );
    }
}

export default Play;