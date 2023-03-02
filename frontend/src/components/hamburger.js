import React from "react";
import { motion } from "framer-motion";
import logo from "../images/logo.jpeg"
import "../styles/hamburger.css"
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

function Hamburger() {
    const[flip,setFlip]=React.useState(false)
    const[first,setFirst]=React.useState(true)
    const[second,setSecond]=React.useState(false)
    const[third,setThird]=React.useState(false)
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
         <div>
            
         </div>
        {/* <p style={{color:"black"}}>hello</p> */}
         {!flip&&<div style={{color:"black"}} onClick={()=>{setFlip(!flip)}}><AiOutlineMenu size={55}/></div>}
         {flip&&<div style={{color:"black"}} onClick={()=>{setFlip(!flip)}}><MdOutlineCancel color="red" size={55}/></div>}
         
         
   
        </div>
       
      </motion.div>
      {flip&&<div className="hamburgerBody">
            <div className="hamburgerTitle" onClick={()=>{setFirst(true);setSecond(false);setThird(false);setFlip(false)}} style={{color:first?"blue":"black"}}>WHY ME?</div>
          <div className="hamburgerTitle" onClick={()=>{setSecond(true);setFirst(false);setThird(false);setFlip(false)}} style={{color:second?"blue":"black"}}>MY WORK</div>
          <div className="hamburgerTitle" onClick={()=>{setThird(true);setFirst(false);setSecond(false);setFlip(false)}} style={{color:third?"blue":"black"}}>CONTACT ME!</div>

         </div>}
    </motion.div>
  );
}

export default Hamburger;
