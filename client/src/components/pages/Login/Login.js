import React from "react";
// import "./Login.css"

function Login(props) {
    console.log(props.username);
    return(
        <div className="login">
            <div className="form-signin text-center">
                <img className="mb-4" src="http://cdn.onlinewebfonts.com/svg/img_363996.png" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">MEMBER LOGIN</h1>
                <label className="sr-only">Username</label>
                <input 
                    type="username"
                    name="username"
                    value={props.username}
                    onChange={props.handleInputChange} 
                    id="inputUsername" className="form-control" placeholder="Username" required autoFocus />
                <label className="sr-only">Password</label>
                <input 
                    type="password"
                    name="password"
                    value={props.password}
                    onChange={props.handleInputChange} 
                    id="inputPassword" className="form-control" placeholder="Password" required />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-light btn-block shadow-lg" type="submit" onClick={props.handleLogin}>LOGIN</button>
                <p className="mt-5 pt-5">Code Racer &copy; 2019</p>
            </div>
        </div>
    );
}

export default Login;