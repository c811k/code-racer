import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import Play from "./components/pages/Play/Play";
import About from "./components/pages/About/About";
import Auth from "./components/pages/Login";
import Profile from "./components/pages/Profile/Profile";
import "./app.css";
import axios from "axios";

class App extends Component {

  state = {
    loaded: false,
    authenticated: false
  };

  componentDidMount() {
    // check if user has already logged in successfully
    axios.get("/users/auth").then((res) => {
      this.setState({
        loaded: true,
        authenticated: res.data
      });
    });
    this.getLogin();
  }

  setLogin = () => {
    // login component triggered authentication = true
    this.setState({
      authenticated: true
    });
  };

  getLogin = (cb) => {
    axios.get("/api/profile").then((res) => {
      this.setState({
        loaded: true,
        username: res.data.username,
        time: res.data.time
      }, cb);
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar  username={this.state.username}/>
            <Switch>
              <Route exact path="/login" render={(props) => <Auth getLogin={this.getLogin} {...props} />} />
              <Route exact path="/" component={Home} />
              <Route exact path="/play" component={Play} />
              <Route exact path="/about" component={About} />
              <Route exact path="/profile" render={(props) => <Profile getLogin={this.getLogin} time={this.state.time} username={this.state.username} {...props} />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
