import React from "react";
import myImage2 from "./myImage2.png";



function Hero(){
    return(
        <div id="hero-section">
            <div className="hero-text">
            <h2> Welcome To My Website!</h2>
            <h1>I'M TEMITAYO OYEBODE</h1>
            <p>I am a Full Stack Developer skilled in building and managing both frontend and backend applications, capable of delivering complete, user-friendly, and scalable web and mobile solutions.</p>
            <a href="#ContactMe">HIRE ME</a>
             
            </div>
            <br />
            <div className="heroImageDiv">
                    <img className="hero-img" src={myImage2} alt="Tayo" />
                    
            </div>
        </div>
    )
}

export default Hero;
