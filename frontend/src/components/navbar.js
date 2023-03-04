import React from "react";
import { motion } from "framer-motion";
import logo from "../images/logo.jpeg"
import "../styles/navbar.css"
import { Link } from 'react-scroll'

function Navbar() {
    const[first,setFirst]=React.useState(true)
    const[second,setSecond]=React.useState(false)
    const[third,setThird]=React.useState(false)
    const[fourth,setFourth]=React.useState(false)
    
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
         
         <div className="navbarTitle"  style={{color:first?"blue":"white"}}><Link activeClass="active" smooth spy to="why-me" onClick={()=>{setFirst(true);setSecond(false);setThird(false);setFourth(false)}}>WHY ME?</Link></div>
          <div className="navbarTitle"  style={{color:second?"blue":"white"}}><Link activeClass="active" smooth spy to="my-work" onClick={()=>{setSecond(true);setFirst(false);setThird(false);setFourth(false)}}>MY WORKS</Link></div>
          <div className="navbarTitle"  style={{color:fourth?"blue":"white"}}><Link activeClass="active" smooth spy to="experience" onClick={()=>{setFourth(true);setFirst(false);setSecond(false);setThird(false)}}>EXPERIENCE</Link></div>
          <div className="navbarTitle"  style={{color:third?"blue":"white"}}><Link activeClass="active" smooth spy to="contact" onClick={()=>{setThird(true);setFirst(false);setSecond(false);setFourth(false)}}>CONTACT ME!</Link></div>
   
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
