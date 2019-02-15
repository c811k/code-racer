import React, { Component } from "react";
import axios from "axios";
import Signup from "./Signup";
import Login from "./Login";
import Register from "../Register/Register"
// import "./style.css";

class Auth extends Component {

    state = {
        isLoginOpen: true,
        isRegisterOpen: false,
        username: "",
        password: ""
    }

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
        var { username, password } = this.state;
        let payload = { username, password };
        axios.post("/api/user", payload);
        window.location.reload();
    };

    handleLogin = (event) => {

        event.preventDefault();
        let { username, password } = this.state;
        let payload = { username, password };

        
        // send credentials to back-end to check account
        axios.post("/users/login", payload).then((res) => {
            if (res.data !== "error") {
                // if successful, set auth value on parent
                
                this.props.getLogin(() => {
                    this.props.history.push("/profile");
                });
            }
            else if (res.data) {
                // show error message
                this.setState({
                    error: "Failed to log in"
                });
            }
        });
    };

    render() {
        let register = this.state.error ? <Register /> : null;
        return (
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
                {register}
            </div>
        );
    }
}

export default Auth;
