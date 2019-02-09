import React, { Component } from "react";
import axios from "axios";
import Signup from "./Signup";
import "./login.css";

class Auth extends Component {
    state = {
        username: "",
        password: ""

    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleFormSubmit = () => {
        axios.post("/api/user", this.state);
    };

    render() {
        return(
            <div>
                <Signup
                    newUsername={this.state.username}
                    newPassword={this.state.password}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}    
                />
            </div>
        );
    }
}

export default Auth;