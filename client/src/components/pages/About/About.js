import React from "react";
import Calebimage from "./images/calebCR.jpg"
import Clintimage from "./images/clintCR.jpg"
import Irwingimage from "./images/irwingCR.jpg"
import Jonathanimage from "./images/jonathanCR.jpeg"

function About() {
    var style = {
        borderRadius: '50%'
    };

    var ourTeam = {
        padding: '20px 15px 30px',
        background: 'white',
        borderRadius: '15px',
        textAlign: 'center',
        
    }
    var list = {
        listStyleType: "none",
        paddingLeft: "0px"
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div style={ourTeam}>
                        <div className="pic">
                            <img style={style} width={100} height={100} alt="900x500" src={Calebimage} />
                        </div>
                        <h3 className="title">Caleb Kang</h3>
                        <span className="post">Web Developer</span>
                        <br/>
                        <br/>
                        <ul style={list} className="social">
                            <li ><a href="https://github.com/c811k"><i className="fab fa-github"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                            <li>bhk811@gmail.com</li>
                            
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div style={ourTeam}>
                        <div className="pic">
                            <img style={style} width={100} height={100} alt="900x500" src={Clintimage} />
                        </div>
                        <h3 className="title">Clint Forster</h3>
                        <span className="post">Web Developer</span>
                        <br/>
                        <br/>
                        <ul style={list} className="social">
                            <li ><a href="https://github.com/clintForster" target="_blank" ><i className="fab fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/clint-forster/"><i class="fab fa-linkedin"></i></a></li>
                            <li>clinte.forster@gmail.com</li>
                            
                        </ul>
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={ourTeam}>
                        <div className="pic">
                            <img style={style} width={100} height={100} alt="900x500" src={Irwingimage} />
                        </div>
                        <h3 className="title">Irwing Gameros</h3>
                        <span className="post">Web Developer</span>
                        <br/>
                        <br/>
                        <ul style={list} className="social">
                            <li><a href="https://github.com/digibite"><i className="fab fa-github"></i></a></li>
                            <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                            <li>iguknow@gmail.com</li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div style={ourTeam}>
                        <div className="pic">
                            <img style={style} width={100} height={100} alt="900x500" src={Jonathanimage} />
                        </div>
                        <h3 className="title">Jonathan T</h3>
                        <span className="post">Web Developer</span>
                        <br/>
                        <br/>
                        <ul style={list} className="social">
                            <li><a href="github.com/jtala"><i className="fab fa-github"></i></a></li>
                            <li><a href="linkedin.com/in/jonathantalavera" ><i class="fab fa-linkedin"></i></a></li>
                            <li>jtalavera@g.ucla.edu</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;