import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import Play from "./components/pages/Play/Play";
import About from "./components/pages/About/About";
import Auth from "./components/pages/Login";
import Profile from "./components/pages/Profile/Profile";
import "./app.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/play" component={Play} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
