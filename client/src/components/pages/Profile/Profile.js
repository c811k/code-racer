import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
class Profile extends Component {

    state = {
        loaded: false,
        username: "",
        topscore: ""
    };

    componentDidMount() {
        // check if user has already logged in successfully
        axios.get("/api/profile").then((res) => {
            this.setState({
                loaded: true,
                username: res.data.username
            });
            console.log(res.data)
        });
    }

    handleLogout = () => {
        axios.get("/logout").then(() => {
            this.props.history.push("/login");
        })
    } 

    render() {
        return (
            <div>
                <h1>Welcome {this.state.username}</h1>

                <h3>Your top score is {this.state.username}</h3>
                <button onClick={this.handleLogout}>log out</button>
                
                {/* <button className="btn btn-lg btn-light btn-block shadow-lg" type="submit" onClick={props.handleLogin}>LOGIN</button> */}
            </div>
        );
    }

}

export default Profile;