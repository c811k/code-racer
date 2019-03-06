import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../Footer/Footer";
import "./profile.css";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            username: "",
            time: ""
        };
    }

    componentWillMount() {
        const {username, time} = this.props;
        this.setState({username, time})
        
    }

    handleLogout = () => {
        console.log(this.state.username);
        axios.get("/logout").then(() => {
            this.props.getLogin();
            this.props.history.push("/login");
        })
    } 
    
    render() {
        return (
            <div>
            <div id="personal">
                <div className="row">
                    <div className="col-md-12">
                        <div class="jumbotron text-center">
                            <h3 class="display-4 mb-5">Hello, {this.state.username}</h3>
                            <h4 class="lead">Welcome! Are you ready to take over the leaderboard today?</h4>
                            <h3 class="btn btn-lg rounded-0 mt-5 disabled">Your best time: {this.state.time} seconds</h3>
                            <hr class="my-4" />
                            <Link to="/play" className="btn btn-lg rounded-0 mr-4"><i class="far fa-thumbs-up"></i>     Yes, I'm ready!
                            </Link>
                            <button class="btn btn-lg rounded-0" onClick={this.handleLogout}>No, I'm out  <i class="fas fa-sign-out-alt"></i></button>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
            </div>
        );
    }
}

export default Profile;