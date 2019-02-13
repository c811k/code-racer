import React from "react";
import Navbar from "../../Navbar";

function Contact() {
    return (
        <div>
            
            <div className="col-sm-4">
                <div className="team-member">
                    <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
                        <h4>Irwing Gameros</h4>
                        <p className="text-muted">Full Stack Web Developer</p>
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
        )
    }
        
export default Contact;