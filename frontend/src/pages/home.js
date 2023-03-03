import React from "react";
import { motion } from "framer-motion";
import "../styles/home.css";
import Navbar from "../components/navbar";
import Hamburger from "../components/hamburger";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="home"
    >
      <div className="nav">
      <Navbar/>
      <Hamburger/>
      </div>
      <div className="one">

      </div>
      <div className="two">

      </div>
      <div className="three">

      </div>
    </motion.div>
  );
}

export default Home;
