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

       {/*  <div className="container" id="title">
            
            <div className="row">
                <div className="col-md-12 topspace">
                <img className="loadingGif" src={demoGif} alt="demoGif" />
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
        </div> */}
        <Footer />
        </div>
    );
}

export default Home;