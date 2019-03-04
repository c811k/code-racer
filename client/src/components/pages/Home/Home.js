import React from "react";
import demoGif from"./images/frontPageGif.gif";
import slowtyper from"./images/slowtyper.gif";
import fasttyper from"./images/fasttyper.gif";
import Footer from "../../Footer/Footer";
import "./Home.css";
import { Link } from "react-router-dom";



function Home() {
    return(
        <div>
        <div className="container" id="home">
            <div className="row">
                <div className="col-md-12 topspace">
                <img className="loadingGif" src={demoGif} alt="demoGif" />
                </div>
            </div>
        
            <div className="container topcontainer">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="alert welcome alert-secondary" id="welcome">Welcome to Code Racer!</h1>
                    </div>
                </div>
            </div>
        
           {/*  <div className="row midcontainer">
                <div className="col-md-5">
                    <img className="slowtyper" src={slowtyper} alt="slowtyper" />
                </div>

                <div className="col-md-2">
                    <h1 className="alert alert-secondary">TO</h1> 
                </div>

                <div className="col-md-5">
                    <img className="fasttyper" src={fasttyper} alt="fasttyper" />
                </div>
            </div> */}
        
            <div className="row bottomcontainer">
                <div className="col-md-12">
                    <h1 className="alert alert-secondary">WELL PROVE IT!</h1>
                </div>
            </div>
        
            <br></br>

            <div className="row mt-5">
                <div className="col-md-6">
                    <Link to="/play" className="btn btn-danger btn-lg rounded-0 shadow col-md-12">PLAY NOW!
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link to="/login" className="btn btn-danger btn-lg rounded-0 shadow col-md-12">
                        LOGIN
                    </Link>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Home;