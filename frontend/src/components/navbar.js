import React from "react";
import { motion } from "framer-motion";
import logo from "../images/logo.jpeg"
import "../styles/navbar.css"

function Navbar() {
    const[first,setFirst]=React.useState(true)
    const[second,setSecond]=React.useState(false)
    const[third,setThird]=React.useState(false)
    
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >

      <motion.div className="navbar">
        <div><img src={logo} alt="" className="logo"/></div>
        <div className="navbarRight">
         
         <div className="navbarTitle" onClick={()=>{setFirst(true);setSecond(false);setThird(false);}} style={{color:first?"blue":"white"}}>WHY ME?</div>
          <div className="navbarTitle" onClick={()=>{setSecond(true);setFirst(false);setThird(false)}} style={{color:second?"blue":"white"}}>MY WORKS</div>
          <div className="navbarTitle" onClick={()=>{setThird(true);setFirst(false);setSecond(false)}} style={{color:third?"blue":"white"}}>CONTACT ME!</div>
   
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
