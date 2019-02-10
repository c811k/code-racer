import React from "react";
import "./login.css";

function Signup(props) {
    return (
        <div className="login">
            <form className="form-signin text-center">
                <img className="mb-4" src="http://cdn.onlinewebfonts.com/svg/img_363996.png" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                <label className="sr-only">Username</label>
                <input 
                    type="username"
                    name="username"
                    value={props.username}
                    onChange={props.handleInputChange} 
                    id="newUsername"
                    className="form-control" placeholder="Username" required autoFocus 
                />
                <label className="sr-only">Password</label>
                <input 
                    type="password"
                    name="password"
                    value={props.password}
                    onChange={props.handleInputChange}
                    id="newPassword" className="form-control" placeholder="Password" required 
                />
            
                <button className="btn btn-lg btn-light btn-block shadow-lg" type="submit"onClick={props.handleFormSubmit}>SIGN UP</button>
                <p className="mt-5 pt-5">Code Racer &copy; 2019</p>
            </form>
        </div>       
    );
}

export default Signup;