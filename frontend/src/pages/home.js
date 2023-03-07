import React from "react";
import { motion } from "framer-motion";
import "../styles/home.css";
import Navbar from "../components/navbar";
import Hamburger from "../components/hamburger";
import Me from "../components/me";
import Works from "../components/works";
import Experience from "../components/experience";
import Contact from "../components/contact";
import Footer from "../components/footer";

function Home() {
  return (
    <div>
      <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 1, delay: 1 }}
       viewport={{ once: true }}
        className="nav"
      >
        <Navbar />
        <Hamburger />
      </motion.div>
      <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 2, delay: 1 }}
       viewport={{ once: true }}
        className="one"
        id="why-me"
      >
        <Me />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        viewport={{ once: true }}
        className="two"
        id="my-work"
      >
        <Works />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        viewport={{ once: true }}
        className="four"
        id="experience"
      >
        <Experience />
      </motion.div>
      {/* <div className="three" id="contact">
        <Contact/>
      </div> */}
      <motion.div initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              viewport={{ once: true }} className="five" id="contact">
        <Footer />
      </motion.div>
    </div>
  );
}

export default Home;
