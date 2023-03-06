import React from "react";
import { motion } from "framer-motion";
import "../styles/works.css";
import homePic from "../images/boy.avif";
import Pic from "../images/man.avif";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function Works() {
  const [id, setId] = React.useState(0);

  const projectList = [
    {
      title: "CLIENT-CONNECT",
      image: homePic,
      frontend:"FRONTEND:ReactJS, REDUX,FRAMER-MOTION,CSS,FIGMA",
      backend:"BACKEND:NODE,EXPRESS,REST API, MONGODBDATABASE,STORAGE,JWT,NODEMAILER,POSTMAN",
      description:
        "A Full-Stack Web Application which connects the workers[e.g. maid,electrician] to the clients[e.g. me and you] made within 24 hr in UnscriptRookie’s Hackathon. The application also has an admin page which monitors the match"
    },
    {
      title: "TYPEMASTER",
      image: Pic,
      techStack:"REACT.JS,CSS,FIREBASE AUTHENTICATION USING E-MAIL,FIRESTORE DB,FIREBASE QUERIES",
      description:
        "A competitive typing platform is a fully responsive Web Application where users can check their words per minute and accuracy and compare their performance to others around the world",
    },
  ];
  function changeRight() {
    if (id === 1) {
      setId(0);
    } else {
      setId(id + 1);
    }
  }
  function changeLeft() {
    if (id === 0) {
      setId(1);
    } else {
      setId(id - 1);
    }
  }

  return (
    <div className="worksMain">
      <div className="works">
        <div className="right" onClick={changeLeft}>
          <AiOutlineDoubleLeft />
        </div>
        <motion.div
          initial={{ y: "-25" }}
          animate={{ y: "calc(15vw - 50%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          // whileHover={{ scale: 1.2 }}
          className="home"
        > 
        <div>

        </div>
            <div className="projectInfo">
            <div className="projectImage" ><motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 1 }}src={projectList[id].image} alt=" " className="proj-img"/></div>
            <br />
            <br className="break-project"/>
            <div  className="projDesc">{projectList[id].description}<br/><br/>TECH STACK USED:<br/>{projectList[id].techStack}{projectList[id].frontend}<br/>{projectList[id].backend}</div>
            </div>
        </motion.div>
        <div className="right" onClick={changeRight}>
          <AiOutlineDoubleRight />
        </div>
      </div>
    </div>
  );
}

export default Works;
