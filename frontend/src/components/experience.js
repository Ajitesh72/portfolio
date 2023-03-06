import React from "react";
import { motion } from "framer-motion";
import "../styles/experience.css";
import firstPic from "../images/man.avif";
import secondPic from "../images/boy.avif";

function Experience() {
  return (
    <div className="experienceMain">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={firstPic} alt="" className="expPic" />
            <h3>BACKEND DEVELOPER,DJS-S4DS</h3>
            <h5>Nov 2022-Current</h5>
            <div className="moreInfo">CLICK FOR MORE INFORMATION</div>
          </div>
          <div className="flip-card-back">
            <div className="cardBack">
              <h1 className="cardBack-heading" style={{ color: "pink" }}>
                DJS-S4DS
              </h1>
              <div>
                S4DS is a non-profit professional association aiming to promote
                Data Science and its benefits amongst the students through
                application based Hackathons and seminars
              </div>
              <br />
              <div>MY ROLE:</div>
              <div style={{color:"darkblue"}}>
                Responsible for developing the backend for the XTRACT Hackathon
                using Firebase and React.Js.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={secondPic} alt="" className="expPic" />
            <h3>WINNER OF HACK-CONCODE-2022</h3>
            <h5>NOV 12-13, 2022</h5>
            <div className="moreInfo">CLICK FOR MORE INFORMATION</div>
          </div>
          <div className="flip-card-back">
          <div className="cardBack">
              <h3 className="cardBack-heading" style={{ color: "pink" }}>
                HACK CONCODE-2022
              </h3>
              <div>
                HACK-CONCODE was a 48-hour long Hackathon held on Devpost
              </div>
              <br />
              <div>MY Project:</div>
              <div>
                Made a Blog-Application using React.js and Firebase where storyTeller can write and publish stories online and users can read stories for FREE
              </div>
              <br/>
              <div>
                ACOMPLISHMENT:
              </div>
              <div style={{color:"darkblue"}}>
                Won the Most Creative Project Prize where more than 65 teams participated and was selected for direct Technical Interview Round for MLH Fellowship Program
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
