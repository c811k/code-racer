import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"


function Navbar(props) {
    let link;
    const {username} = props;
    if(username) {
        link = <li className="nav-item ml-2">
        <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
        <i class="fas fa-user-circle" id="profile"></i> {username} 
        </Link>
        </li>
    } else {
        link = <li className="nav-item ml-2">
        <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
            LOGIN
        </Link>
        </li>
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <a className="navbar-brand" href="/"><img className="mr-3" src="https://cdn.onlinewebfonts.com/svg/img_363996.png" alt="logo" height="40" width="40" />CODE RACER</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ml-2">
                        <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        ABOUT
                        </Link>
                    </li>
                    <li className="nav-item ml-2">
                        <Link to="/play" className={window.location.pathname === "/play" ? "nav-link active" : "nav-link"}>
                        PLAY
                        </Link>
                    </li>
                    {link}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;