import React from "react";
import { motion } from "framer-motion";
import logo from "../images/logo.jpeg"
import "../styles/hamburger.css"
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-scroll'

function Hamburger() {
    const[flip,setFlip]=React.useState(false)
    const[first,setFirst]=React.useState(true)
    const[second,setSecond]=React.useState(false)
    const[third,setThird]=React.useState(false)
    const[fourth,setFourth]=React.useState(false)
    // const[fourth,setFourth]=React.useState(false)
    
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <motion.div className="hamburger">
        <div><img src={logo} alt="" className="logo"/></div>
 
        <div className="hamburgerRight">
         <div className="hamburgerMain">
            
         
         {!flip&&<div style={{color:"black"}} onClick={()=>{setFlip(!flip)}}><AiOutlineMenu size={55} color="white"/></div>}
         {flip&&<div style={{color:"black"}} onClick={()=>{setFlip(!flip)}}><MdOutlineCancel color="red" size={55}/></div>}
         </div>
        </div>
       
      </motion.div>
      {flip&&<div className="hamburgerBody">
            {/* <div className="hamburgerTitle" onClick={()=>{setFirst(true);setSecond(false);setThird(false);setFlip(false)}} ><a href="#why-me" style={{color:first?"blue":"white",textDecoration:"none"}}>WHY ME?</a></div>
          <div className="hamburgerTitle" onClick={()=>{setSecond(true);setFirst(false);setThird(false);setFlip(false)}} ><a href="#my-work" style={{color:second?"blue":"white",textDecoration:"none"}}>MY WORK</a></div>
          <div className="hamburgerTitle" onClick={()=>{setThird(true);setFirst(false);setSecond(false);setFlip(false)}} ><a href="#contact" style={{color:third?"blue":"white",textDecoration:"none"}}>CONTACT ME!</a></div> */}
          <div className="hamburgerTitle"  style={{color:first?"blue":"red",fontSize:"1.2em",textAlign:"center"}}><Link activeClass="active" smooth spy to="why-me" onClick={()=>{setFirst(true);setSecond(false);setThird(false);setFourth(false)}}>WHY ME?</Link></div>
          <div className="hamburgerTitle"  style={{color:second?"blue":"red",fontSize:"1.2em",textAlign:"center"}}><Link activeClass="active" smooth spy to="my-work" onClick={()=>{setSecond(true);setFirst(false);setThird(false);setFourth(false)}}>MY WORKS</Link></div>
          <div className="hamburgerTitle"  style={{color:fourth?"blue":"red",fontSize:"1.2em",textAlign:"center"}}><Link activeClass="active" smooth spy to="experience" onClick={()=>{setFourth(true);setFirst(false);setSecond(false);setThird(false)}}>EXPERIENCE</Link></div>
          <div className="hamburgerTitle"  style={{color:third?"blue":"red",fontSize:"1.2em",textAlign:"center"}}><Link activeClass="active" smooth spy to="contact" onClick={()=>{setThird(true);setFirst(false);setSecond(false);setFourth(false)}}>CONTACT ME!</Link></div>
   

         </div>}
    </motion.div>
  );
}

export default Hamburger;
