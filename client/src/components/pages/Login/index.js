import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import "./login.css";

class Auth extends Component {
    state = {
        isLoginOpen: true,
        isRegisterOpen: false,
        username: "",
        password: ""

    };

    showRegisterBox = () => {
        this.setState({
            isRegisterOpen: true,
            isLoginOpen: false
        })
    }

    showLoginBox = () => {
        this.setState({
            isLoginOpen: true,
            isRegisterOpen: false
        })
    }

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
                <div className="login-tab">
                    <div className="login-register text-center btn btn-light" onClick={this.showLoginBox}>
                        LOGIN
                    </div>
                    <div className="login-register text-center btn btn-light" onClick={this.showRegisterBox}>
                        REGISTER
                    </div>
                </div>

                {this.state.isLoginOpen && <Login />}
                {this.state.isRegisterOpen && <Signup
                    username={this.state.username}
                    password={this.state.password}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />}
            </div>
        );
    }
}

export default Auth;