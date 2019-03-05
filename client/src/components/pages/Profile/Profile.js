import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
            <div class="jumbotron text-center">
                <h3 class="display-4 mb-5">HELLO, {this.state.username}</h3>
                <h4 class="lead">WELCOME! ARE YOU READY TO TAKE OVER THE LEADERBOARD TODAY?</h4>
                <h3 class="btn btn-danger btn-lg rounded-0 shadow mt-5 disabled">YOUR BEST TIME: {this.state.time} seconds</h3>
                <hr class="my-4" />
                <Link to="/play" className="btn btn-light btn-lg rounded-0 shadow mr-4"><i class="far fa-thumbs-up"></i> YES, I'M READY
                </Link>
                <button class="btn btn-secondary btn-lg rounded-0 shadow" onClick={this.handleLogout}>NO, I'M OUT  <i class="fas fa-sign-out-alt"></i></button>
            </div>
        );
    }

}

export default Profile;