import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div id="home">
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                    <div className="jumbotron mt-5 bg-transparent" id="header">
                        <h1 className="text-white my-5 pb-5"><strong>C O D E  R A C E R</strong></h1>
                        <Link to="/play" className="btn btn-lg  border rounded-0 mt-5 mr-5 px-5" id="playnow"><strong>PLAY NOW</strong></Link>
                        <Link to="/login" className="btn btn-lg  border rounded-0 mt-5 ml-5 px-5" id="playnow"><strong>SIGN UP</strong></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;