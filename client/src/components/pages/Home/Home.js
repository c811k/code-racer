import React from "react";
import demoGif from"./images/demoGif.gif";
import slowtyper from"./images/slowtyper.gif";
import fasttyper from"./images/fasttyper.gif";
import "./Home.css";
import { Link } from "react-router-dom";



function Home() {
    return(
    <div className="entireHome">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <img className="loadingGif" src={demoGif}></img>
                </div>
            </div>
        </div>
    <br></br>
    <br></br>
    <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Can you go from</h1>
                </div>
            </div>
    </div>
    <br></br>

    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <img className="slowtyper" src={slowtyper}></img>
            </div>

            <div className="col-md-2">
                <h1>to</h1> 
            </div>

            <div className="col-md-5">
            <img className="fasttyper" src={fasttyper}></img>
            </div>
        </div>
        
    </div>

    <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Well, prove it!!</h1>
                </div>
            </div>
    </div>
    <br></br>
    

    <div className="container">
        <div className="row">
            <div className="col-md-6">
            <Link to="/play" className={window.location.pathname === "/play"}>
                <button type="button" className="btn btn-danger btn-lg col-md-12">Play Now!</button>

            </Link>
            </div>
            <div className="col-md-6">
            <Link to="/login" className={window.location.pathname === "/login"}>
                <button type="button" className="btn btn-danger btn-lg col-md-12">Log In</button>
            </Link>
            </div>
        </div>
    </div>
    </div>
        
    );
}

export default Home;