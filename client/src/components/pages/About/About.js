import React from "react";
import Calebimage from "./images/calebCR.jpg"
import Clintimage from "./images/clintCR.jpg"
import Irwingimage from "./images/irwingCR.jpg"
import Jonathanimage from "./images/jonathanCR.jpeg"
import Footer from "../../Footer/Footer";

function About() {
    var style = {
        borderRadius: '50%'
    };

    var ourTeam = {
        height: '500px',
        padding: '30px 15px 30px',
        background: 'white',
        borderRadius: '15px',
        textAlign: 'center'        
    }
    var list = {
        listStyleType: "none",
        paddingLeft: "0px",
        color: "grey"
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row text-center">
                <div className="col-md-12">
                    <h2 className="alert alert-secondary mb-5">
                        <div className="mb-2"><img className="mr-3" src="http://cdn.onlinewebfonts.com/svg/img_363996.png" alt="logo" height="40" width="40" /></div>
                        MEET OUR TEAM
                    </h2>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div style={ourTeam}>
                            <div className="pic">
                                <img style={style} width={150} height={200} alt="900x500" src={Calebimage} />
                            </div>
                            <h3 className="title mt-5">Caleb Kang</h3>
                            <span className="post">Web Developer</span>
                            <br/>
                            <br/>
                            <ul style={list} className="social mt-5">
                                <li >
                                    <a className="mr-2" href="https://github.com/c811k"><i style={list} className="fab fa-github fa-2x"></i></a>
                                    <a className="mr-2" href="https://www.linkedin.com/in/caleb-kang/"><i style={list} className="fab fa-linkedin fa-2x"></i></a>
                                    <a href="mailto:bhk811@gmail.com"><i style={list} className="fas fa-envelope-open fa-2x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div style={ourTeam}>
                            <div className="pic">
                                <img style={style} width={150} height={200} alt="900x500" src={Clintimage} />
                            </div>
                            <h3 className="title mt-5">Clint Forster</h3>
                            <span className="post">Web Developer</span>
                            <br/>
                            <br/>
                            <ul style={list} className="social mt-5">
                                <li >
                                    <a className="mr-2" href="https://github.com/clintForster" target="_blank" ><i style={list} className="fab fa-github fa-2x"></i></a>
                                    <a className="mr-2" href="https://www.linkedin.com/in/clint-forster/"><i style={list} className="fab fa-linkedin fa-2x"></i></a>
                                    <a href="mailto:clinte.forster@gmail.com"><i style={list} className="fas fa-envelope-open fa-2x"></i></a>
                                </li>                                
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div style={ourTeam}>
                            <div className="pic">
                                <img style={style} width={150} height={200} alt="900x500" src={Irwingimage} />
                            </div>
                            <h3 className="title mt-5">Irwing Gameros</h3>
                            <span className="post">Web Developer</span>
                            <br/>
                            <br/>
                            <ul style={list} className="social mt-5">
                                <li>
                                    <a className="mr-2" href="https://github.com/digibite"><i style={list} className="fab fa-github fa-2x"></i></a>
                                    <a className="mr-2" href="https://www.linkedin.com/in/irwing-gameros/"><i style={list} className="fab fa-linkedin fa-2x"></i></a>
                                    <a href="mailto:iguknow@gmail.com"><i style={list} className="fas fa-envelope-open fa-2x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div style={ourTeam}>
                            <div className="pic">
                                <img style={style} width={150} height={200} alt="900x500" src={Jonathanimage} />
                            </div>
                            <h3 className="title mt-5">Jonathan T</h3>
                            <span className="post">Web Developer</span>
                            <br/>
                            <br/>
                            <ul style={list} className="social mt-5">
                                <li>
                                    <a className="mr-2" href="github.com/jtala"><i style={list} className="fab fa-github fa-2x"></i></a>
                                    <a className="mr-2" href="linkedin.com/in/jonathantalavera" ><i style={list} className="fab fa-linkedin fa-2x"></i></a>
                                    <a href="mailto:jtalavera@g.ucla.edu"><i style={list} className="fas fa-envelope-open fa-2x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default About;