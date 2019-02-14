import React from "react";
import gif from "./frontPageGif.gif";
import "./Home.css";


function Home() {
    return(
    <div className="container">
        <h1>Home</h1>
        <img className="loadingGif" src={gif}></img>
        <span></span>
        <div className="leftside">

            Sit minim ex laboris ex est aliquip fugiat ad irure adipisicing. Ipsum nostrud irure exercitation anim magna duis. Incididunt fugiat commodo commodo duis.
            Sit minim ex laboris ex est aliquip fugiat ad irure adipisicing. Ipsum nostrud irure exercitation anim magna duis. Incididunt fugiat commodo commodo duis.
            
            
        </div>

        <div className="rightSide">

        Sit minim ex laboris ex est aliquip fugiat ad irure adipisicing. Ipsum nostrud irure exercitation anim magna duis. Incididunt fugiat commodo commodo duis.
        Sit minim ex laboris ex est aliquip fugiat ad irure adipisicing. Ipsum nostrud irure exercitation anim magna duis. Incididunt fugiat commodo commodo duis.

</div>
        
    </div>
        
    );
}

export default Home;