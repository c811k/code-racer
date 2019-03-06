import React from "react";
import Footer from "../../Footer/Footer";
import "./Home.css";
import { Link } from "react-router-dom";



function Home() {
    return(
    <div>
        <div id="home">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="jumbotron mt-5 bg-transparent" id="header">
                        <h1 className="text-white mt-5 headTitle"><strong>C O D E  R A C E R</strong></h1>
                        <Link to="/play" className=" playButton">
                        PLAY NOW
                        </Link>
                    </div>
                </div>
        </div>
    </div>
   
        <Footer />
        </div>
    );
}

export default Home;