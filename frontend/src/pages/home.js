import React from "react";
import { motion } from "framer-motion";
import "../styles/home.css";
import Navbar from "../components/navbar";
import Hamburger from "../components/hamburger";
import Me from "../components/me";
import Works from "../components/works";

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
      <div className="one" id="why-me">
      <Me/>
      </div>
      <div className="two" id="my-work">
      <Works/>
      </div>
      <div className="three" id="contact">
        CONTACT

      </div>
    </motion.div>
  );
}

export default Home;
