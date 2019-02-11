import React, { Component } from "react";
// import axios from "axios";
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

    // handleFormSubmit = () => {
    //     axios.post("/api/user", this.state);
    //     window.location.reload();
    // };

    // handleLogin = () => {

    // };

    render() {
        return(
            <div>
                <div className="login-tab btn-group btn-group-toggle">
                    <div className={"login-register text-center btn btn-light " + (this.state.isLoginOpen ? "active" : null)} onClick={this.showLoginBox}>
                        LOGIN
                    </div>
                    <div className={"login-register text-center btn btn-light " + (this.state.isRegisterOpen ? "active" : null)} onClick={this.showRegisterBox}>
                        REGISTER
                    </div>                    
                </div>

                {this.state.isLoginOpen && 
                <Login 
                    username={this.state.username}
                    password={this.state.password}
                    handleInputChange={this.handleInputChange}
                    handleLogin={this.handleLogin}
                />}

                {this.state.isRegisterOpen && 
                <Signup
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