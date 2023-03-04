import React from "react";
import { motion } from "framer-motion";
import "../styles/works.css";
import homePic from "../images/boy.avif";
import Pic from "../images/man.avif";
import { projectList } from "./workpic";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function Works() {
  const [id, setId] = React.useState(0);

  const projectList = [
    {
      title: "Nature's Life",
      image: homePic,
      description:
        "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. ",
    },
    {
      title: "Into The Waters",
      image: Pic,
      description:
        "Duis at tellus vitae velit aliquet varius. Fusce luctus libero et ligula tristique lobortis. Vestibulum eu placerat risus, eu semper augue. Integer at purus sit amet elit pretium viverra. Suspendisse id fringilla nibh, nec dictum urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
    },
    {
      title: "Higher Than The Stars",
      image: homePic,
      description:
        "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. Proin rhoncus magna lectus, nec consequat augue ultricies eu.",
    },
  ];
  function changeRight() {
    if (id === 2) {
      setId(0);
    } else {
      setId(id + 1);
    }
  }
  function changeLeft() {
    if (id === 0) {
      setId(2);
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
            <div className="projectImage" ><motion.img whileHover={{ scale: 1.2 }} src={projectList[id].image} alt=" " width={400} height={400} className="proj-img"/></div>
            <br/>
            <div  className="projDesc">{projectList[id].description}</div>
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
