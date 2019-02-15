import React, { Component } from "react";
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
        axios.get("/logout").then(() => {
            this.props.getLogin();
            this.props.history.push("/login");
        })
    } 

    render() {
        return (
            <div>
                <h1>Welcome {this.state.username}</h1>

                <h3>Your top score is {this.state.time}</h3>
                <button onClick={this.handleLogout}>log out</button>
                
                {/* <button className="btn btn-lg btn-light btn-block shadow-lg" type="submit" onClick={props.handleLogin}>LOGIN</button> */}
            </div>
        );
    }

}

export default Profile;