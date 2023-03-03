import React from "react";
import { motion } from "framer-motion";
// import homePic from "../images/home.webp";
import homePic from "../images/me.svg";
import "../styles/me.css"

function Me() {
  return (
    <div>

    <div className="meMain" >
        <div>
        <img src={homePic} alt="" className="meImg"></img>
        </div>
        <div className="meRight">
            NEED A DEVELOPER WHO IS A PART TIME DESIGNER?
            <br/>
            <br/>
            YOU FOUND YOUR GUY!

        </div>
       
    </div>
    <div className="meBottom">
            <div className="meBottom-content">NEED A DEVELOPER WHO IS A PART TIME DESIGNER?</div>
            <br/>
            <div className="meBottom-content">YOU FOUND YOUR GUY!</div>

        </div>
    </div>
    
  );
}

export default Me;
