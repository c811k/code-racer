import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"


function Navbar(props) {
    let link;
    const {username} = props;
    if(username) {
        link = <li className="btn nav-item mr-3">
        <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active text-light" : "nav-link text-white"}>
        <i class="fas fa-user-circle text-white" id="profile"></i> PROFILE
        </Link>
        </li>
    } else {
        link = <li className="btn nav-item mr-3">
        <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active text-light" : "nav-link text-white"}>
            LOGIN
        </Link>
        </li>
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
            <a className="navbar-brand text-white" href="/"><img className="mx-3" src="https://cdn.onlinewebfonts.com/svg/img_363996.png" alt="logo" height="40" width="40" />C O D E R A C E R</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="btn nav-item ml-2">
                        <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active text-light" : "nav-link text-white"}>
                        TEAM
                        </Link>
                    </li>
                    <li className="btn nav-item ml-2">
                        <Link to="/play" className={window.location.pathname === "/play" ? "nav-link active text-light" : "nav-link text-white"}>
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