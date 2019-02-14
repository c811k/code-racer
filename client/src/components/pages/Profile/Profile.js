import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            username: "",
            topscore: ""
        };
    }

    componentWillMount() {
        const {username, topscore} = this.props;
        this.setState({username, topscore})
    }



    handleLogout = () => {
        axios.get("/logout").then(() => {
            this.props.getLogin();
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