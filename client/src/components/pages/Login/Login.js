import React from "react";
import "./login.css"

function Login(props) {

    return(
        <div className="login">
            <form className="form-signin text-center">
                <img className="mb-4" src="http://cdn.onlinewebfonts.com/svg/img_363996.png" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Member Login</h1>
                <label className="sr-only">Username</label>
                <input 
                    type="username"
                    value={props.username} 
                    id="inputUsername" className="form-control" placeholder="Username" required autoFocus />
                <label className="sr-only">Password</label>
                <input 
                    type="password"
                    value={props.password} 
                    id="inputPassword" className="form-control" placeholder="Password" required />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-light btn-block shadow-lg" type="submit">LOGIN</button>
                <p className="mt-5 pt-5">Code Racer &copy; 2019</p>
            </form>
        </div>
        
    );
}

export default Login;